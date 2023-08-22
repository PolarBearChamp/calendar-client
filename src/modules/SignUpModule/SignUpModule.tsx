import Image from 'next/image'

import cls from '../../../app/signup/SignUpModule.module.scss'
import SignupForm from '@/FeatureLayer/SignUp/ui/SignUpForm/SignupForm'

const SignUpModule = () => {
  return (
    <div className={cls.container}>
      <div className={cls.bg}>
        <Image src="/bg/auth.jpg" alt="bg" fill className={cls.image} />
      </div>
      <SignupForm />
    </div>
  )
}

export default SignUpModule
