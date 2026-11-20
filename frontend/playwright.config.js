import { defineConfig, devices } from '@playwright/test'

// Pruebas de las páginas ya compiladas (npm run test:e2e). En local, si Chromium no está donde espera
// Playwright, indicar su ruta con PW_CHROMIUM_PATH.
const launchOptions = process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {}

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.e2e.js',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: 'http://localhost:4173', launchOptions, trace: 'retain-on-failure' },
  projects: [
    { name: 'ordenador', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 }, launchOptions } },
    { name: 'movil', use: { ...devices['Pixel 5'], launchOptions } },
  ],
  webServer: {
    command: 'npm run build && npm run preview -- --port 4173 --strictPort',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: {
      // Valores de relleno: las pruebas no hablan con servicios reales.
      VITE_SUPABASE_URL: 'https://ejemplo.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'clave-de-ejemplo',
    },
  },
})
