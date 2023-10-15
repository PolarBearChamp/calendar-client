import { FC, useCallback, useState } from 'react'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import { clsx } from 'clsx'

import {
  Button,
  ButtonSize,
  ButtonTheme,
  Checkbox,
  Input,
  InputSize,
  Text,
  TextStyle,
} from '@/SharedLayer/ui'

import cls from './SignupForm.module.scss'

import { useSignupMutation } from '@/SharedLayer/model/api/signupAPI'
import { SignupSchema } from '../../model/types/signupSchema'

const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupSchema>()

  const [isPolicy, setIsPolicy] = useState(false)
  const onChangePolicy = useCallback(() => {
    setIsPolicy((prev) => !prev)
  }, [])
  const [signup, result] = useSignupMutation()
  const onSubmit: SubmitHandler<SignupSchema> = (data) => {
    if (isPolicy) {
      signup(data)
    }
  }
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(cls.form__signup)}>
      <h1 className={cls.header}>Create your account</h1>
      <label htmlFor="username">
        Username
        <Input
          control={control}
          id="username"
          type="text"
          placeholder="your username"
          textSize={InputSize.M}
          {...register('username', { required: true })}
        />
      </label>
      {errors.username && errors.username.type === 'required' && (
        <Text type={TextStyle.ERROR}>Поле обязательно</Text>
      )}
      <label htmlFor="email">
        Email
        <Input
          control={control}
          id="email"
          type="email"
          placeholder="address@mail.com"
          textSize={InputSize.M}
          {...register('email', { required: true })}
        />
      </label>
      {errors.email && errors.email.type === 'required' && (
        <Text type={TextStyle.ERROR}>Поле обязательно</Text>
      )}
      <label htmlFor="password">
        Password
        <Input
          control={control}
          id="password"
          type="password"
          placeholder="your password"
          textSize={InputSize.M}
          {...register('password', { required: true })}
        />
      </label>
      {errors.password && errors.password.type === 'required' && (
        <Text type={TextStyle.ERROR}>Поле обязательно</Text>
      )}
      {errors.password && errors.password.type === 'minLength' && (
        <Text type={TextStyle.ERROR}>Поле обязательно</Text>
      )}
      <div className={cls.policy}>
        <Checkbox
          control={control}
          id="isPolicy"
          {...register('isPolicy', { required: true })}
          // checked={isPolicy}
          // onChange={onChangePolicy}
        />
        <span>
          I’m bro and i agree to all{' '}
          <Link href={'/agreements/term'} className={cls.link}>
            Term
          </Link>
          ,{' '}
          <Link href={'/agreements/policy'} className={cls.link}>
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href={'/agreements/fees'} className={cls.link}>
            Fees
          </Link>
          .
        </span>
      </div>
      <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.M}>
        Sign up
      </Button>
      <div className={cls.footer}>
        bro, you really have an account?
        <Link href="/">&nbsp;Log in</Link>
      </div>
    </form>
  )
}

export default SignupForm
