import React, { FC } from 'react'
import { IFriendData } from '@/SharedLayer/model'
import Image from 'next/image'

import cls from './FriendItem.module.scss'
import Link from 'next/link'

interface IProps {
  friend: IFriendData
}

export const FriendItem: FC<IProps> = ({ friend }) => {
  return (
    <Link href={`/${friend.url}`} className={cls.link}>
      <div className={cls.FriendItem}>
        <div className={cls.image}>
          {friend.image && <Image src={friend.image} alt={'friend'} fill />}
        </div>
        <div className={cls.info}>
          <div>{friend.username}</div>
          <div className={cls.status}>{friend.status}</div>
        </div>
      </div>
    </Link>
  )
}
