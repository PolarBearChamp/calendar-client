import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import { clsx } from 'clsx'
import {
  Area,
  AreaSize,
  Button,
  ButtonSize,
  ButtonTheme,
  Input,
  InputSize,
} from '@/SharedLayer/ui'
import cls from './AddSongForm.module.scss'
import { AddSongSchema } from '../../model/types/addSongSchema'
import { useGetSongByIdQuery } from '@/FeatureLayer/AddSong/model/api/addSongAPI'

export interface AddSongFormProps {
  userId: string
  date: string
}

const AddSongForm: FC<AddSongFormProps> = ({ date, userId }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddSongSchema>()
  const onSubmit: SubmitHandler<AddSongSchema> = (data) => console.log(data)

  const songData = useGetSongByIdQuery(userId)?.data?.body?.post

  return (
    <div className={cls.container}>
      <div className={cls.left}>
        <span className={cls.left__text}>Insert the link, bro</span>
        {songData?.image && (
          <>
            <div className={cls.cover}>
              <Image src={songData?.image} alt={'cover'} fill />
            </div>
            <div className={cls.songInfo}>
              {songData?.title && <span>{songData?.title}</span>}
              {songData?.artist && (
                <span className={clsx(cls.artist)}>{songData?.artist}</span>
              )}
            </div>
          </>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.right}>
        <Input
          control={control}
          id="link"
          type="text"
          placeholder="url"
          textSize={InputSize.S}
          {...register('link', { required: true })}
          value={songData?.link ? songData?.link : ''}
        />
        <div className={cls.description}>
          <span>what's on your mind?</span>
          <Area
            id="description"
            placeholder="type here..."
            {...register('description')}
            height={240}
            textSize={AreaSize.S}
            value={songData?.description ? songData?.description : ''}
          />
        </div>
        <div className={cls.description}>
          <span>under what mood?</span>
          <Input
            control={control}
            id="tags"
            type="text"
            placeholder="happy, sad, energy"
            {...register('tags')}
            textSize={InputSize.S}
            value={songData?.tags.length ? songData?.tags.join(', ') : ''}
          />
        </div>
        <div className={cls.controls}>
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
