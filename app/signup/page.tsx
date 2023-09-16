'use client'
import Image from 'next/image'

import { SignupForm } from '@/FeatureLayer/SignUp'
import { WithLogo } from '@/SharedLayer/ui/Layouts'

import cls from './SignUpModule.module.scss'

const SignUpPage = () => {
  return (
    <div className={cls.container}>
      <div className={cls.bg}>
        <Image src="/bg/auth.jpg" alt="bg" fill className={cls.image} />
      </div>
      <WithLogo>
        <SignupForm />
      </WithLogo>
    </div>
  )
}

export default SignUpPage
