import { FC } from 'react'
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

import { useSignupMutation } from '../../model/api/signupAPI'
import { SignupSchema } from '../../model/types/signupSchema'

const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupSchema>()

  const [signup, result] = useSignupMutation()
  const onSubmit: SubmitHandler<SignupSchema> = (data) => {
    signup(data)
  }

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
        />{' '}
        {errors.username && errors.username.type === 'required' && (
          <Text className={cls.abs} type={TextStyle.ERROR}>
            Поле обязательно
          </Text>
        )}
      </label>

      <label htmlFor="email">
        Email
        <Input
          control={control}
          id="email"
          type="email"
          placeholder="address@mail.com"
          textSize={InputSize.M}
          {...register('email', { required: true })}
        />{' '}
        {errors.email && errors.email.type === 'required' && (
          <Text className={cls.abs} type={TextStyle.ERROR}>
            Поле обязательно
          </Text>
        )}
      </label>
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
        {errors.password && errors.password.type === 'required' && (
          <Text className={cls.abs} type={TextStyle.ERROR}>
            Поле обязательно
          </Text>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <Text className={cls.abs} type={TextStyle.ERROR}>
            Поле обязательно
          </Text>
        )}
      </label>

      <label>
        <div className={cls.policy}>
          <Checkbox
            control={control}
            id="isPolicy"
            {...register('isPolicy', { required: true })}
          />
          <span className={cls.policyText}>
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
        {errors.isPolicy && errors.isPolicy.type === 'required' && (
          <Text className={cls.abs} type={TextStyle.ERROR}>
            Для отправки формы необходимо согласиться с правилами
          </Text>
        )}
      </label>
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
