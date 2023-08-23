import React, { FC } from 'react'
import { IFriendData } from '@/SharedLayer/model'
import Image from 'next/image'

interface IProps {
  friend: IFriendData
}

export const FriendItem: FC<IProps> = ({ friend }) => {
  return (
    <div>
      <Image src={friend.image} alt={'friend'} width={37} height={37} />
      <div>
        <div>{friend.username}</div>
        <div>{friend.status}</div>
      </div>
    </div>
  )
}
