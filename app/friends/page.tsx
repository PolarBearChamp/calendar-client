import { FC } from 'react'
import { clsx } from 'clsx'

import cls from './FriendsPage.module.scss'

const FriendsPage: FC = () => {
  return <div className={clsx(cls.FriendsModule)}>friends</div>
}
export default FriendsPage
