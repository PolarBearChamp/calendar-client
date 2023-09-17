import { useEffect, useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

import { Button, ButtonSize, ButtonTheme } from '../Button/Button'
import cls from './ThemeSwitcher.module.scss'
import { Theme } from '../../model'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || Theme.LIGHT
  })

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    )
  }

  useEffect(() => {
    localStorage.setItem('theme', currentTheme)
    document.body.classList.remove(Theme.LIGHT, Theme.DARK)
    document.body.classList.add(currentTheme)
  }, [currentTheme])

  const srcThemeIcon =
    currentTheme === Theme.LIGHT ? '/icons/Moon.svg' : '/icons/Sun.svg'

  return (
    <Button
      theme={ButtonTheme.ICON}
      className={clsx(className, cls.ThemeSwitcher)}
      onClick={toggleTheme}
      size={ButtonSize.S}>
      <Image
        src={srcThemeIcon}
        alt='theme'
        width={40}
        height={40}
        className={cls.ThemeSwitcherImage}
      />
    </Button>
  )
}
