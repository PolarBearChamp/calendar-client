import { ButtonHTMLAttributes, FC } from 'react'
import { clsx } from 'clsx'
import cls from './Button.module.scss'

export const enum ButtonTheme {
  PRIMARY = 'primary',
  CANCEL = 'cancel',
  EMPTY = 'empty',
  ICON = 'icon',
}

export const enum ButtonSize {
  S = 's',
  M = 'm',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ButtonTheme
  size: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, size, ...otherProps } = props
  return (
    <button
      className={clsx(cls.Button, className, cls[theme], cls[size])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
