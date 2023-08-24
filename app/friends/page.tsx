'use client'
import { FC } from 'react'
import { clsx } from 'clsx'

import cls from './FriendsPage.module.scss'
import { Friends } from '@/FeatureLayer/Friends'
import { IFriendData } from '@/SharedLayer/model'
import { UserControls } from '@/WidgetLayer/UserControls'

const FriendsPage: FC = () => {
  const getData = (): IFriendData[] => {
    return [
      {
        id: 1,
        username: 'test name',
        status: 'test status',
        image: '/songs/3.png',
        url: 'test',
      },
      {
        id: 2,
        username: 'test name',
        status: 'test status',
        image: '/songs/2.webp',
        url: 'test',
      },
      {
        id: 3,
        username: 'test name',
        image: '/songs/1.webp',
        url: 'test',
      },
      {
        id: 4,
        username: 'test name',
        status: 'test status',
        image: '/songs/11.png',
        url: 'test',
      },
      {
        id: 5,
        username: 'test name',
        status: 'test status',
        image: '/songs/8.png',
        url: 'test',
      },
    ]
  }

  return (
    <div className={clsx(cls.FriendsModule)}>
      <h1>Do you know these guys?</h1>
      <div className={cls.content}>
        <UserControls />
        <Friends data={getData()} />
      </div>
    </div>
  )
}
export default FriendsPage
