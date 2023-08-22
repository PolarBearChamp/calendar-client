import LoginForm from '@/components/Login/Forms/LoginForm'
import Slides from '@/components/Login/Slides/Slides'
import cls from './LoginModule.module.scss'
import { FC } from 'react'

const LoginModule: FC = () => {
  return (
    <div className={cls.container}>
      <LoginForm />
      <Slides />
    </div>
  )
}

export default LoginModule
