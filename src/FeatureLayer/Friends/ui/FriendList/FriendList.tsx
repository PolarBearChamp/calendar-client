import React, { FC } from 'react'
import { FriendItem } from '@/FeatureLayer/Friends/ui/FriendItem/FriendItem'
import { IFriendData } from '@/SharedLayer/model'

interface IProps {
  data?: IFriendData[]
}

export const FriendList: FC<IProps> = ({ data }) => {
  return (
    <div>
      {data?.map((friend) => {
        return <FriendItem key={friend.id} friend={friend} />
      })}
    </div>
  )
}
