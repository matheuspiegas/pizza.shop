import test, { expect } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()
  const toast = page.getByText(
    'Enviamos um link de autenticação para o seu e-mail.'
  )
  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('matheus@example.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()
  const toast = page.getByText('Credenciais inválidas.')
  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  const pageTitle = page.getByRole('heading', { name: 'Criar conta grátis' })
  expect(pageTitle).toBeVisible()

  await page.waitForTimeout(2000)
})
