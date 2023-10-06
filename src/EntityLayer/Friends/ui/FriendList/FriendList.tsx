import React, { FC } from 'react'
import { FriendItem } from '@/EntityLayer/Friends/ui/FriendItem/FriendItem'
import { IFriendData } from '@/SharedLayer/model'
import cls from './FriendList.module.scss'

interface IProps {
  data?: IFriendData[]
}

export const FriendList: FC<IProps> = ({ data }) => {
  return (
    <div className={cls.FriendList}>
      {data?.map((friend) => {
        return <FriendItem key={friend.id} friend={friend} />
      })}
    </div>
  )
}
