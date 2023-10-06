'use client'

import { ReactNode } from 'react'

import {
  Theme,
  ThemeProvider,
  useTheme,
} from '@/AppLayer/providers/ThemeProvider'
import '@/AppLayer/style/index.scss'
import { clsx } from 'clsx'
import { Provider } from 'react-redux'
import { store } from '@/AppLayer/providers/StoreProvider/config/store'

export default function RootLayout({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  return (
    <html lang="en">
      <Provider store={store}>
        <ThemeProvider initialTheme={Theme.LIGHT}>
          <body className={clsx('app', theme)}>{children}</body>
        </ThemeProvider>
      </Provider>
    </html>
  )
}
