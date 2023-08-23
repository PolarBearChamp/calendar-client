'use client'
import Image from 'next/image'

import { SignupForm } from '@/FeatureLayer/SignUp'

import cls from './SignUpModule.module.scss'

const SignUpPage = () => {
  return (
    <div className={cls.container}>
      <div className={cls.bg}>
        <Image src="/bg/auth.jpg" alt="bg" fill className={cls.image} />
      </div>
      <SignupForm />
    </div>
  )
}

export default SignUpPage
