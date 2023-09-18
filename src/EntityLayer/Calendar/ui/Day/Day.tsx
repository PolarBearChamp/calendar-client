import { FC, useCallback, useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

import cls from './Day.module.scss'
import { AddSongModal } from '@/FeatureLayer/AddSong'

interface IProps {
  day?: number
  back?: string
  mock?: boolean
}

const Day: FC<IProps> = ({ day, back, mock }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const onShowModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  if (!!back) {
    return (
      <div className={clsx(cls.container)} onClick={onShowModal}>
        <div className={clsx(cls.number, cls.withBack)}>{day}</div>

        <div className={cls.info}>
          <div className={clsx(cls.artist, cls.textWrapper)}>Kanye West</div>
          <div className={clsx(cls.song, cls.textWrapper)}>Runaway</div>
        </div>

        <Image
          src={`${back}`}
          alt=""
          width={100}
          height={100}
          className={cls.back}
        />

        {isModalOpen && (
          <AddSongModal isOpen={isModalOpen} onClose={onCloseModal} />
        )}
      </div>
    )
  }

  return (
    <div className={clsx(cls.container, cls.mock)}>
      <span className={cls.number}>{day}</span>
    </div>
  )
}

export default Day
