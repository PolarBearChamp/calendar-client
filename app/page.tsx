'use client'

import cls from './LoginModule.module.scss'
import { FC } from 'react'
import LoginForm from '@/FeatureLayer/Login/ui/LoginForm/LoginForm'
import Slides from '@/components/Login/Slides/Slides'

const LoginPage: FC = () => {
  return (
    <div className={cls.container}>
      <LoginForm />
      <Slides />
    </div>
  )
}

export default LoginPage
