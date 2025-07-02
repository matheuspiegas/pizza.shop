import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './test',

  fullyParallel: true,
  // forbidOnly impede que testes marcados com .only sejam executados ou enviados para o CI.
  // Se algum teste estiver com .only e forbidOnly for true (como em CI), o Playwright irá falhar.
  forbidOnly: !!process.env.CI,

  testMatch: /.*\.e2e-spec\.ts$/,

  retries: process.env.CI ? 2 : 0,

  //workers é quantos testes eu quero rodar em paralelo.
  workers: process.env.CI ? 1 : undefined,

  // que formato de saída eu quero para os relatórios (resultados dos testes)
  // reporter: 'html',

  use: {
    // A baseURL é a URL base para os testes. geralmente definida no package.json
    baseURL: 'http://localhost:5174',
  },

  webServer: {
    // Command é o comando que inicia o servidor de desenvolvimento de testes no meu caso é pnpm dev:test
    command: 'pnpm dev:test',
    url: 'http://localhost:5174',

    // deve iniciar um novo servidor ou reutilizar um servidor existente. geralmente true em ambiente de desenvolvimento e false em CI.
    reuseExistingServer: !process.env.CI,
  },

  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

  // {
  //   name: 'Mobile Chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
  // {
  //   name: 'Mobile Safari',
  //   use: { ...devices['iPhone 12'] },
  // },

  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },
  // ],
})
