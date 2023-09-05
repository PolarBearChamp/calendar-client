import { FC } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import cls from './Logo.module.scss'
import { useTheme } from '@/AppLayer/providers/ThemeProvider'

export const Logo: FC = () => {
  const { theme } = useTheme()

  return (
    <Link href="/" className={clsx(cls.Logo)}>
      calendar
    </Link>
  )
}
