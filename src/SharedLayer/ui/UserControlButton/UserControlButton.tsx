import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import cls from './UserControlButton.module.scss'
import { useTheme } from '@/AppLayer/providers/ThemeProvider'

interface IProps {
  route: string
  type: UserControlType
}

export const enum UserControlType {
  FRIENDS = 'friends',
  DISCOVERY = 'discovery',
  PROFILE = 'profile',
}

export const UserControlButton: React.FC<IProps> = ({ route, type }) => {
  const { theme } = useTheme()

  return (
    <Link
      href={route}
      className={clsx(cls.control, cls[type], cls[`${type}__${theme}`])}
    />
  )
}
