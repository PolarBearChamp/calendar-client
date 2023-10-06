import { FC } from 'react'
import { ThemeSwitcher, UserControlButton } from '@/SharedLayer/ui'

import cls from './UserControls.module.scss'
import { UserControlType } from '@/SharedLayer/ui/UserControlButton/UserControlButton'
import { useIcons } from '@/SharedLayer/lib/hooks/useIcons'

export const UserControls: FC = () => {
  const avatar =
    'https://media.tenor.com/9TYMus2paQIAAAAd/%D1%80%D0%B6%D0%B0%D0%BA%D0%B0%D0%B1%D0%BE%D1%82-%D0%BA%D0%BE%D1%82%D0%B8%D0%BA.gif'

  return (
    <div className={cls.container}>
      <UserControlButton
        route="/friends"
        type={UserControlType.FRIENDS}
        icon={useIcons().icFriends}
        iconOnHover={useIcons().icFriendsHover}
      />
      <UserControlButton
        route="/discovery"
        type={UserControlType.DISCOVERY}
        icon={useIcons().icDiscovery}
        iconOnHover={useIcons().icDiscoveryHover}
      />
      <UserControlButton
        route="/profile"
        type={UserControlType.PROFILE}
        icon={avatar}
      />
      <ThemeSwitcher />
    </div>
  )
}
