import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { clsx } from 'clsx'

import {
  Button,
  ButtonSize,
  ButtonTheme,
  Input,
  InputSize,
} from '@/SharedLayer/ui'

import cls from './Profile.module.scss'

interface ProfileFormProps {
  className?: string
}

export const ProfileForm: FC<ProfileFormProps> = ({ className }) => {
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

  return (
    <form
      onSubmit={onSubmit}
      className={clsx(cls.ProfileForm, className && cls[className])}
    >
      <h1 className={cls.header}>Profile</h1>
      <div className={cls.fields}>
        <label htmlFor="username">
          Username
          <Input
            id="username"
            type="text"
            placeholder="username"
            {...register('username', { required: true })}
            textSize={InputSize.S}
          />
          {errors.username && errors.username.type === 'required' && (
            <div className={cls.warning}>Поле обязательно</div>
          )}
        </label>
        <label htmlFor="email">
          Email
          <Input
            id="email"
            type="email"
            placeholder="username@mail.com"
            {...register('email', { required: true })}
            textSize={InputSize.S}
          />
          {errors.email && errors.email.type === 'required' && (
            <div className={cls.warning}>Поле обязательно</div>
          )}
        </label>
        <label htmlFor="password">
          Password
          <Input
            id="password"
            type="password"
            placeholder="password"
            {...register('password', { required: true })}
            textSize={InputSize.S}
          />
          {errors.password && errors.password.type === 'required' && (
            <div className={cls.warning}>Поле обязательно</div>
          )}
        </label>
        {/* Пока так, потом сделаю красивый date picker */}
        <label htmlFor="birthday">
          Birthday
          <Input
            id="birthday"
            type="date"
            placeholder="birthday"
            {...register('birthday')}
            textSize={InputSize.S}
          />
          {errors.birthday && errors.birthday.type === 'required' && (
            <div className={cls.warning}>Поле обязательно</div>
          )}
        </label>
      </div>
      <div className={cls.controls}>
        <Button
          theme={ButtonTheme.EMPTY}
          size={ButtonSize.S}
          className={cls.button}
        >
          Cancel
        </Button>
        <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.S}>
          Save profile
        </Button>
      </div>
    </form>
  )
}
