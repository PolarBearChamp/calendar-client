import { FC } from 'react'
import { ThemeSwitcher, UserControlButton } from '@/SharedLayer/ui'

import cls from './UserControls.module.scss'
import { UserControlType } from '@/SharedLayer/ui/UserControlButton/UserControlButton'

export const UserControls: FC = () => {
  return (
    <div className={cls.container}>
      <UserControlButton route="/friends" type={UserControlType.FRIENDS} />
      <UserControlButton route="/discovery" type={UserControlType.DISCOVERY} />
      <UserControlButton route="/profile" type={UserControlType.PROFILE} />
      <ThemeSwitcher />
    </div>
  )
}
