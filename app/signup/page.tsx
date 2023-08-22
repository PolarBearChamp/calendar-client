'use client'
import Image from 'next/image'

import cls from './SignUpModule.module.scss'
import SignupForm from '@/FeatureLayer/SignUp/ui/SignUpForm/SignupForm'

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
