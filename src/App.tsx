import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <>
      <ThemeProvider storageKey="@pizza.shop-theme" defaultTheme="dark">
        <Toaster closeButton={true} richColors={true} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
