import { FC, memo, ReactNode } from 'react'

import cls from './Text.module.scss'
import { clsx } from 'clsx'

interface TextProps {
  className?: string
  type: TextStyle
  children: ReactNode
}

export const enum TextStyle {
  ERROR = 'error',
  HIGHLIGHT = 'highlight',
  DEFAULT = 'default',
}

export const Text: FC<TextProps> = memo(
  ({ className, type = TextStyle.DEFAULT, children }) => {
    return (
      <span className={clsx(cls.Text, [cls[type]], [className])}>
        {children}
      </span>
    )
  },
)
