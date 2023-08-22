import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { clsx } from 'clsx'

import { CustomLink, LinkTheme } from '@/SharedLayer/ui/Links/CustomLink'
import { Checkbox } from '@/SharedLayer/ui/CheckBox/Checkbox'
import { Button, ButtonTheme } from '@/SharedLayer/ui/Button/Button'

import cls from './LoginForm.module.scss'
import { Input } from '@/SharedLayer/ui/Input/Input'
import { FC } from 'react'

const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => console.log(data))
  console.log(errors)

  return (
    <form onSubmit={onSubmit} className={clsx(cls.form__signup)}>
      <h1 className={cls.header}>Create your account</h1>
      <label htmlFor="name">
        Name
        <Input
          id="name"
          name="name"
          type="name"
          placeholder="your name"
          register={register}
          options={{ required: true }}
        />
      </label>
      {errors.name && errors.name.type === 'required' && (
        <span>Поле обязательно</span>
      )}
      <label htmlFor="email">
        Email
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="username@mail.com"
          register={register}
          options={{ required: true }}
        />
      </label>
      {errors.email && errors.email.type === 'required' && (
        <span>Поле обязательно</span>
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
        />
      </label>
      {errors.password && errors.password.type === 'required' && (
        <span>Поле обязательно</span>
      )}
      {errors.password && errors.password.type === 'minLength' && (
        <span>Минимальная длина 6 символов</span>
      )}
      <div className={cls.policy}>
        <Checkbox
          id="policy"
          name="policy"
          register={register}
          options={{ required: true }}
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
      <Button theme={ButtonTheme.PRIMARY}>Sign up</Button>
      <div className={cls.footer}>
        bro, you really have an account?
        <CustomLink href="/" theme={LinkTheme.DEFAULT}>
          &nbsp;Log in
        </CustomLink>
      </div>
    </form>
  )
}

export default SignupForm
