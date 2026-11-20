import fs from 'node:fs'
import { test, expect } from '@playwright/test'

// Aplica a cada página las mismas cabeceras de seguridad que vercel.json y comprueba que la política de
// contenido (CSP) no bloquea nada de lo que usa la web.
const config = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'))
const cabeceras = Object.fromEntries(config.headers[0].headers.map((h) => [h.key, h.value]))

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.__csp = []
    document.addEventListener('securitypolicyviolation', (e) => window.__csp.push(`${e.violatedDirective} ${e.blockedURI}`))
  })
  await page.route('**/rest/v1/closures**', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '[]' }))
  await page.route('**/rest/v1/contacts**', (r) => r.fulfill({ status: 201, body: '' }))
  await page.route('**/*', async (route) => {
    // Solo las páginas de la propia web llevan las cabeceras (no el mapa de Google, que es de otro sitio).
    if (route.request().resourceType() !== 'document' || !route.request().url().startsWith('http://localhost')) return route.fallback()
    const respuesta = await route.fetch()
    await route.fulfill({ response: respuesta, headers: { ...respuesta.headers(), ...cabeceras } })
  })
})

const violaciones = (page) => page.evaluate(() => window.__csp)

test('la política de seguridad no bloquea nada en las páginas', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('milele-cookie-consent', JSON.stringify({ thirdParty: true, date: Date.now() })))
  for (const ruta of ['/', '/about', '/about/silvia', '/spaces', '/contact', '/politica-de-cookies']) {
    await page.goto(ruta)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    expect(await violaciones(page), ruta).toEqual([])
  }
})

test('la política de seguridad permite el formulario, el mapa y los servicios, y bloquea lo demás', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('milele-cookie-consent', JSON.stringify({ thirdParty: true, date: Date.now() })))
  await page.goto('/contact')
  await page.getByLabel('Nombre completo').fill('Ana Prueba')
  await page.getByLabel('Email').fill('ana@ejemplo.es')
  await page.getByLabel('Mensaje').fill('Hola')
  await page.getByRole('checkbox').check()
  await page.getByRole('button', { name: 'Enviar mensaje' }).click()
  await expect(page.getByText(/Mensaje enviado correctamente/)).toBeVisible()
  // Con las cookies de terceros aceptadas, el mapa se carga solo.
  await expect(page.locator('iframe[src*="google.com/maps"]')).toHaveCount(1)
  // Conexiones a Supabase y EmailJS: permitidas (puede fallar la red, pero no la política).
  await page.evaluate(() => Promise.allSettled([fetch('https://ejemplo.supabase.co/x'), fetch('https://api.emailjs.com/x')]))
  expect(await violaciones(page)).toEqual([])
  // Comprobación de que la política está activa: otro dominio sí se bloquea.
  await page.evaluate(() => fetch('https://dominio-no-permitido.example/x').catch(() => {}))
  await expect.poll(() => violaciones(page)).toEqual([expect.stringContaining('connect-src')])
})

test('las cabeceras incluyen las protecciones básicas', async () => {
  expect(cabeceras['X-Content-Type-Options']).toBe('nosniff')
  expect(cabeceras['X-Frame-Options']).toBe('DENY')
  expect(cabeceras['Content-Security-Policy']).toContain("frame-ancestors 'none'")
  expect(cabeceras['Referrer-Policy']).toBeTruthy()
})
