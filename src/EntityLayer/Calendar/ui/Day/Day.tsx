import { FC, useCallback, useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

import cls from './Day.module.scss'
import { AddSongModal } from '@/FeatureLayer/AddSong'
import { ISongData } from '@/SharedLayer/model'

interface IProps {
  day?: number
  mock?: boolean
  data?: Partial<ISongData>
}

const Day: FC<IProps> = (props) => {
  const { day, data, mock } = props
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const onShowModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  if (mock) {
    return (
      <div className={clsx(cls.container, cls.mock)}>
        <span className={cls.number}>{day}</span>
      </div>
    )
  }

  return (
    <div className={clsx(cls.container)} onClick={onShowModal}>
      <div
        className={clsx(cls.number, {
          [cls.withCover]: data?.cover && data?.cover !== '',
        })}
      >
        {day}
      </div>
      {data?.artist && (
        <div className={cls.info}>
          <div className={clsx(cls.artist, cls.textWrapper)}>
            {data?.artist}
          </div>
          <div className={clsx(cls.song, cls.textWrapper)}>{data?.name}</div>
        </div>
      )}

      {data?.cover ? (
        <Image
          src={`${data?.cover}`}
          alt=""
          width={100}
          height={100}
          className={cls.back}
        />
      ) : (
        ''
      )}

      {isModalOpen && (
        <AddSongModal isOpen={isModalOpen} onClose={onCloseModal} />
      )}
    </div>
  )
}

export default Day
