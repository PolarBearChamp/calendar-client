'use client'

import { FC } from 'react'

import { LoginForm } from '@/FeatureLayer/Login'
import { Slides } from '@/SharedLayer/ui'

import cls from './LoginPage.module.scss'

const LoginPage: FC = () => {
  return (
    <div className={cls.container}>
      <LoginForm />
      <Slides />
    </div>
  )
}

export default LoginPage
