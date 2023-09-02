import { ButtonHTMLAttributes, FC } from 'react'
import { clsx } from 'clsx'
import cls from './Button.module.scss'

export const enum ButtonTheme {
  PRIMARY = 'primary',
  NAVIGATION = 'navigation',
  DEFAULT = 'default',
  STROKED = 'stroked',
  EMPTY = 'empty',
  CANCEL = 'cancel',
  ICON = 'icon',
}

export const enum ButtonSize {
  S = 's',
  M = 'm',
  L = 'l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ButtonTheme
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, size, ...otherProps } = props
  return (
    <button
      className={clsx(cls.Button, className, cls[theme], size && cls[size])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
