import React, { FC, ReactNode } from 'react'
import { Logo } from '@/SharedLayer/ui'
import cls from './WithLogo.module.scss'

interface IProps {
  children: ReactNode
}

const WithLogo: FC<IProps> = ({ children }) => {
  return (
    <div className={cls.wrapper}>
      <Logo />
      {children}
    </div>
  )
}

export default WithLogo
