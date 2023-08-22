import Image from 'next/image'

import {
  CustomLink,
  LinkStatus,
  LinkTheme,
} from '@/SharedLayer/ui/Links/CustomLink'
import { ThemeSwitcher } from '@/SharedLayer/ui/ThemeSwitcher/ThemeSwitcher'
import cls from './UserControls.module.scss'
import { FC } from 'react'

export const UserControls: FC = () => (
  <div className={cls.container}>
    <CustomLink
      href="/friends"
      theme={LinkTheme.FRIENDS}
      status={LinkStatus.DEFAULT}
    />
    <CustomLink
      href="/discovery"
      theme={LinkTheme.DISCOVERY}
      status={LinkStatus.DEFAULT}
    />
    <CustomLink
      href="/profile"
      theme={LinkTheme.PROFILE}
      status={LinkStatus.DEFAULT}
    >
      <Image
        src="/icons/legasov.png"
        alt="profile image"
        height={40}
        width={40}
        quality={100}
      />
    </CustomLink>
    <ThemeSwitcher />
  </div>
)
