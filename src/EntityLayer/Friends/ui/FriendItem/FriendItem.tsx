import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IFriendData } from '@/SharedLayer/model'
import cls from './FriendItem.module.scss'

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
