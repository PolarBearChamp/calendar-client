'use client'

import '@/AppLayer/style/index.scss'
import { clsx } from 'clsx'
import { ReactNode } from 'react'
import { ThemeProvider } from '@/AppLayer/providers/ThemeProvider'

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
