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
    <div className={cls.FriendItem}>
      <div className={cls.image}>
        <Link href={`/${friend.url}`}>
          {friend.image && <Image src={friend.image} alt={'friend'} fill />}
        </Link>
      </div>
      <div className={cls.info}>
        <Link href={`/${friend.url}`}>
          <div>{friend.username}</div>
        </Link>
        <div className={cls.status}>{friend.status}</div>
      </div>
    </div>
  )
}
