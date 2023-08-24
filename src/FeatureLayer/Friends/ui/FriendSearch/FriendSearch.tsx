import React, { FC } from 'react'
import {
  Button,
  ButtonSize,
  ButtonTheme,
  Input,
  InputSize,
} from '@/SharedLayer/ui'
import { SubmitHandler, useForm } from 'react-hook-form'

import cls from './FriendSearch.module.scss'

interface Inputs {
  searchQuery?: string
}

export const FriendSearch: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.FriendSearch}>
      <div className={cls.searchBlock}>
        <Input
          id="searchQuery"
          name="searchQuery"
          type="text"
          placeholder="find friend"
          register={register}
          options={{ required: true }}
          textSize={InputSize.XS}
        />
        {errors.searchQuery && <span>ну введи ты хоть что-нибудь</span>}
      </div>
      <Button theme={ButtonTheme.PRIMARY} type={'submit'} size={ButtonSize.S}>
        Search
      </Button>
    </form>
  )
}
