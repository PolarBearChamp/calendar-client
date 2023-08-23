'use client'
import { FC } from 'react'
import { clsx } from 'clsx'

import cls from './FriendsPage.module.scss'
import { Friends } from '@/FeatureLayer/Friends'
import { IFriendData } from '@/SharedLayer/model'

const FriendsPage: FC = () => {
  const getData = (): IFriendData[] => {
    return [
      {
        id: 1,
        username: 'test name',
        status: 'test status',
        image: '/songs/3.png',
      },
      {
        id: 2,
        username: 'test name',
        status: 'test status',
        image: '/songs/2.webp',
      },
      {
        id: 3,
        username: 'test name',
        status: 'test status',
        image: '/songs/1.webp',
      },
      {
        id: 4,
        username: 'test name',
        status: 'test status',
        image: '/songs/7.png',
      },
      {
        id: 5,
        username: 'test name',
        status: 'test status',
        image: '/songs/8.png',
      },
    ]
  }

  return (
    <div className={clsx(cls.FriendsModule)}>
      <Friends data={getData()} />
    </div>
  )
}
export default FriendsPage
