import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
  Button,
  ButtonSize,
  ButtonTheme,
  Input,
  InputSize,
  Text,
  TextStyle,
} from '@/SharedLayer/ui'

import cls from './LoginForm.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import { LoginSchema } from '../../model/types/loginSchema'
import { useLoginByEmailMutation } from '../../model/api/loginAPI'

const LoginForm: FC = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginSchema>()

  const [login, result] = useLoginByEmailMutation()

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    login(data)
    if (result.isSuccess) {
      router.push('/home/2023-09')
    }
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
      <h1 className={cls.header}>Login</h1>
      <div className={cls.fields}>
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
        <Link href="/forget">bro, did you really forget the password?</Link>
      </div>
      <div className={cls.submit}>
        <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.M}>
          Sign in
        </Button>
        <span>
          bro, you really don&apos;t have an account?
          <Link href="/signup">&nbsp;Sign up for free</Link>
        </span>
      </div>
    </form>
  )
}

export default LoginForm
