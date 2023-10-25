'use client'
import cls from './ForgetPage.module.scss'
import {
  Button,
  ButtonSize,
  ButtonTheme,
  Input,
  InputSize,
  Logo,
} from '@/SharedLayer/ui'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'

type FormValues = {
  email: string
}
const ForgetPasswordPage = () => {
  const { register, handleSubmit, control, resetField } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => console.log(data))

  const onCancel = useCallback(() => {
    resetField('email')
  }, [])

  return (
    <form onSubmit={onSubmit} className={cls.form}>
      <Logo classname={cls.logo} />
      <div className={cls.text}>
        Come on, man... how could you forget your password? okay, enter your
        email here, and we'll send you a form to reset it, bruh
      </div>
      <label htmlFor="email" className={cls.labelBlock}>
        Email
        <Input
          control={control}
          id="email"
          type="email"
          placeholder="address@mail.com"
          textSize={InputSize.M}
          {...register('email')}
        />{' '}
      </label>
      <div className={cls.buttons}>
        <Button
          theme={ButtonTheme.EMPTY}
          size={ButtonSize.S}
          onClick={onCancel}
          className={cls.button}
        >
          Cancel
        </Button>
        <Button
          theme={ButtonTheme.PRIMARY}
          size={ButtonSize.S}
          type={'submit'}
          className={cls.button}
        >
          Confirm
        </Button>
      </div>
    </form>
  )
}

export default ForgetPasswordPage
