import { test, expect } from '@playwright/test'

const VIGENTE = JSON.stringify({ thirdParty: false, date: Date.now() })

// Ninguna prueba toca servicios reales: Supabase se simula y el banner de cookies se da por respondido,
// salvo en las pruebas del propio banner.
test.beforeEach(async ({ page }, info) => {
  if (!info.title.includes('banner')) {
    await page.addInitScript((v) => localStorage.setItem('milele-cookie-consent', v), VIGENTE)
  }
  await page.route('**/rest/v1/closures**', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '[]' }))
})

const PAGINAS = [
  { ruta: '/', titulo: /Milele/, h1: /Para siempre/ },
  { ruta: '/about', titulo: /Quiénes somos/, h1: /mismo equipo/ },
  { ruta: '/about/silvia', titulo: /Silvia/, h1: /Silvia Cabello/ },
  { ruta: '/spaces', titulo: /Nuestros espacios/, h1: /Nuestros espacios/ },
  { ruta: '/contact', titulo: /Contacto/, h1: /Contacto/ },
  { ruta: '/aviso-legal', titulo: /Aviso legal/, h1: /Aviso legal/ },
  { ruta: '/politica-de-privacidad', titulo: /privacidad/i, h1: /privacidad/i },
  { ruta: '/politica-de-cookies', titulo: /cookies/i, h1: /cookies/i },
  { ruta: '/ruta-que-no-existe', titulo: /no encontrada/, h1: /no encontrada/ },
]

for (const { ruta, titulo, h1 } of PAGINAS) {
  test(`abre sin errores ni desbordes: ${ruta}`, async ({ page }) => {
    const errores = []
    page.on('pageerror', (e) => errores.push(e.message))
    await page.goto(ruta)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(h1)
    await expect(page).toHaveTitle(titulo)
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false)
    expect(errores).toEqual([])
  })
}

test('un perfil que no existe vuelve a Quiénes somos', async ({ page }) => {
  await page.goto('/about/nadie')
  await expect(page).toHaveURL(/\/about$/)
})

test('cada perfil tiene su botón de cita y los desplegables se abren de uno en uno', async ({ page }) => {
  await page.goto('/about/silvia')
  await expect(page.getByRole('link', { name: 'Pedir cita con Silvia' }).first()).toHaveAttribute('href', '/contact#formulario')
  const bloques = page.locator('details[name=perfil]')
  await bloques.nth(1).locator('summary').click()
  await bloques.nth(2).locator('summary').click()
  await expect(page.locator('details[name=perfil][open]')).toHaveCount(1)
})

test('banner de cookies: rechazar y aceptar pesan lo mismo y la elección se guarda', async ({ page }) => {
  await page.goto('/')
  const aviso = page.getByRole('dialog', { name: 'Aviso de cookies' })
  const rechazar = aviso.getByRole('button', { name: 'Rechazar', exact: true })
  const aceptar = aviso.getByRole('button', { name: 'Aceptar', exact: true })
  await expect(rechazar).toBeVisible()
  const a = await rechazar.boundingBox()
  const b = await aceptar.boundingBox()
  expect(Math.round(a.width)).toBe(Math.round(b.width))
  expect(Math.round(a.height)).toBe(Math.round(b.height))
  await rechazar.click()
  await expect(aviso).toBeHidden()
  const guardado = await page.evaluate(() => JSON.parse(localStorage.getItem('milele-cookie-consent')))
  expect(guardado.thirdParty).toBe(false)
})

test('el mapa de Google no se carga hasta aceptar', async ({ page }) => {
  await page.goto('/contact')
  await expect(page.getByRole('button', { name: /Ver mapa/ })).toBeVisible()
  await expect(page.locator('iframe[src*="google"]')).toHaveCount(0)
})

test('la cabecera se queda fija al bajar con el estado y el teléfono', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => scrollTo(0, 1500))
  await expect.poll(() => page.evaluate(() => Math.round(document.querySelector('header').getBoundingClientRect().top))).toBe(0)
  await expect(page.locator('header [role=status]')).toContainText(/Abierto|Cerrado/)
  await expect(page.locator('header').getByRole('link', { name: /614 438 477/ })).toBeVisible()
})

test('el logo sube arriba del todo desde el inicio', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => scrollTo(0, 1800))
  await page.getByRole('link', { name: /Milele Centro Multidisciplinar/ }).first().click()
  await expect.poll(() => page.evaluate(() => scrollY)).toBeLessThan(5)
})

test('las preguntas frecuentes se abren de una en una', async ({ page }) => {
  await page.goto('/contact')
  const preguntas = page.locator('details[name=faq]')
  await preguntas.nth(0).locator('summary').click()
  await preguntas.nth(1).locator('summary').click()
  await expect(page.locator('details[name=faq][open]')).toHaveCount(1)
})

test('un enlace con ancla baja hasta el formulario aunque la página se cargue bajo demanda', async ({ page }) => {
  await page.goto('/contact#formulario')
  await expect.poll(async () => Math.round((await page.locator('#formulario').boundingBox()).y), { timeout: 8000 }).toBeLessThan(400)
})

test('el formulario valida, y envía y guarda el mensaje', async ({ page }) => {
  let enviado = null
  await page.route('**/rest/v1/contacts**', async (r) => {
    enviado = r.request().postDataJSON()
    await r.fulfill({ status: 201, body: '' })
  })
  await page.goto('/contact')
  const enviar = page.getByRole('button', { name: 'Enviar mensaje' })
  await enviar.click()
  expect(enviado).toBeNull() // faltan campos obligatorios
  await page.getByLabel('Nombre completo').fill('Ana Prueba')
  await page.getByLabel('Email').fill('ANA@Ejemplo.es')
  await page.getByLabel('Mensaje').fill('Hola, quiero pedir cita.')
  await enviar.click()
  expect(enviado).toBeNull() // falta aceptar la política de privacidad
  await page.getByRole('checkbox').check()
  await enviar.click()
  await expect(page.getByText(/Mensaje enviado correctamente/)).toBeVisible()
  expect(enviado[0]).toMatchObject({ name: 'Ana Prueba', email: 'ana@ejemplo.es' })
})
