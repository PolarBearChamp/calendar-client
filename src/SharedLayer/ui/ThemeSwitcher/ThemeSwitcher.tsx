import Image from 'next/image'
import { clsx } from 'clsx'

import { Theme, useTheme } from '@/AppLayer/providers/ThemeProvider'

import { Button, ButtonSize, ButtonTheme } from '../Button/Button'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.ICON}
      className={clsx(className, cls.ThemeSwitcher)}
      onClick={toggleTheme}
      size={ButtonSize.S}
    >
      {theme === Theme.LIGHT ? (
        <Image
          src={'/icons/Moon.svg'}
          alt="theme"
          width={40}
          height={40}
          className={cls.ThemeSwitcherImage}
        />
      ) : (
        <Image
          src={'/icons/Sun.svg'}
          alt="theme"
          width={40}
          height={40}
          className={cls.ThemeSwitcherImage}
        />
      )}
    </Button>
  )
}
