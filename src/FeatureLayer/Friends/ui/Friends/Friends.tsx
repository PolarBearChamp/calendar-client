import React, { FC } from 'react'
import { FriendList } from '../FriendList/FriendList'
import { FriendSearch } from '../FriendSearch/FriendSearch'
import { IFriendData } from '@/SharedLayer/model'

interface IProps {
  data?: IFriendData[]
}

export const Friends: FC<IProps> = ({ data }) => {
  return (
    <div>
      <FriendSearch />
      <FriendList data={data} />
    </div>
  )
}
