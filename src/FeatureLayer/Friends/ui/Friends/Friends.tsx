import React, { FC } from 'react'
import { FriendList } from '../FriendList/FriendList'
import { FriendSearch } from '../FriendSearch/FriendSearch'
import { IFriendData } from '@/SharedLayer/model'

import cls from './Friends.module.scss'

interface IProps {
  data?: IFriendData[]
}

export const Friends: FC<IProps> = ({ data }) => {
  return (
    <div className={cls.Wrapper}>
      <FriendSearch />
      <FriendList data={data} />
    </div>
  )
}
