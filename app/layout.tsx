'use client'

import { ReactNode } from 'react'

import { ThemeProvider, useTheme } from '@/AppLayer/providers/ThemeProvider'
import { Theme } from '@/AppLayer/providers/ThemeProvider/lib/ThemeContext'
import '@/AppLayer/style/index.scss'
import { clsx } from 'clsx'

export default function RootLayout({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  return (
    <html lang="en">
      <ThemeProvider initialTheme={Theme.LIGHT}>
        <body className={clsx('app', theme)}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
