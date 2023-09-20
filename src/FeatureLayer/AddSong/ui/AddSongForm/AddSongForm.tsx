import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { clsx } from 'clsx'
import {
  Area,
  Button,
  ButtonSize,
  ButtonTheme,
  Input,
  InputSize,
} from '@/SharedLayer/ui'
import cls from './AddSongForm.module.scss'

export interface AddSongFormProps {
  onSuccess: () => void
}

const AddSongForm: FC<AddSongFormProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  const dataFromLink = {
    image: '/songs/2.webp',
    artist: 'Public Enemy',
    song: 'Harder than you think',
  }

  return (
    <div className={cls.container}>
      <div className={cls.left}>
        <span className={cls.left__text}>Insert the link, bro</span>
        {dataFromLink?.image && (
          <>
            <div className={cls.cover}>
              <Image src={dataFromLink?.image} alt={'cover'} fill />
            </div>
            <div className={cls.songInfo}>
              {dataFromLink?.song && <span>{dataFromLink?.song}</span>}
              {dataFromLink?.artist && (
                <span className={clsx(cls.artist)}>{dataFromLink?.artist}</span>
              )}
            </div>
          </>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.right}>
        <Input
          id="link"
          name="link"
          type="text"
          placeholder="url"
          register={register}
          options={{ required: true }}
          textSize={InputSize.S}
        />
        <div className={cls.description}>
          <span>what's on your mind?</span>
          <Area
            id="description"
            name="description"
            placeholder="type here..."
            register={register}
            options={{ required: true }}
            height={240}
          />
        </div>
        <div className={cls.description}>
          <span>under what mood?</span>
          <Input
            id="mood"
            name="mood"
            type="text"
            placeholder="happy"
            register={register}
            options={{ required: true }}
            textSize={InputSize.S}
          />
        </div>
        <div className={cls.controls}>
          {/*<Button theme={ButtonTheme.CANCEL} size={ButtonSize.S}>*/}
          {/*  exit*/}
          {/*</Button>*/}
          <Button
            theme={ButtonTheme.PRIMARY}
            size={ButtonSize.S}
            type={'submit'}
          >
            upload
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddSongForm
