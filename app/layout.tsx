'use client'

import { ReactNode } from 'react'
import { clsx } from 'clsx'

import { ThemeProvider } from '@/AppLayer/providers/ThemeProvider'
import '@/AppLayer/style/index.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = localStorage.getItem('theme') || 'light'

  return (
    <ThemeProvider>
      <html lang="en">
        <body className={clsx(`app ${theme}`)}>{children}</body>
      </html>
    </ThemeProvider>
  )
}
