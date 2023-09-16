import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import {
  Button,
  ButtonSize,
  ButtonTheme,
  Input,
  InputSize,
} from '@/SharedLayer/ui'
import { CustomLink, LinkTheme } from '@/SharedLayer/ui/Links/CustomLink'

import cls from './LoginForm.module.scss'
import { FC } from 'react'

const LoginForm: FC = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    router.push('/home')
  })
  console.log(errors)

  return (
    <form onSubmit={onSubmit} className={cls.form}>
      <h1 className={cls.header}>Login</h1>
      <div className={cls.fields}>
        <label htmlFor="email">
          Email
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="username@mail.com"
            register={register}
            options={{ required: true }}
            textSize={InputSize.M}
          />
        </label>
        {errors.email && errors.email.type === 'required' && (
          <div className={cls.warning}>Поле обязательно</div>
        )}
        <label htmlFor="password">
          Password
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            register={register}
            options={{ required: true, minLength: 6 }}
            textSize={InputSize.M}
          />
        </label>
        {errors.password && errors.password.type === 'required' && (
          <div className={cls.warning}>Поле обязательно</div>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <div className={cls.warning}>Минимальная длина 6 символов</div>
        )}
        <CustomLink href="/forget" theme={LinkTheme.DEFAULT}>
          bro, did you really forget the password?
        </CustomLink>
      </div>
      <div className={cls.submit}>
        <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.M}>
          Sign in
        </Button>
        <span>
          bro, you really don&apos;t have an account?
          <CustomLink href="/signup" theme={LinkTheme.DEFAULT}>
            &nbsp;Sign up for free
          </CustomLink>
        </span>
      </div>
    </form>
  )
}

export default LoginForm
