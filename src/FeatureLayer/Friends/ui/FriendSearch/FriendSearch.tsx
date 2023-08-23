import React, { FC } from 'react'
import { Button, ButtonTheme, Input } from '@/SharedLayer/ui'
import { SubmitHandler, useForm } from 'react-hook-form'

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="searchQuery"
        name="searchQuery"
        type="text"
        placeholder="find friend"
        register={register}
        options={{ required: true }}
      />
      {errors.searchQuery && <span>ну введи ты хоть что-нибудь</span>}
      <Button theme={ButtonTheme.PRIMARY} type={'submit'}>
        Search
      </Button>
    </form>
  )
}
