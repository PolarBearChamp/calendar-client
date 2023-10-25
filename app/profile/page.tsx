'use client'
import { FC } from 'react'
import { clsx } from 'clsx'

import { CoverForm, ProfileForm } from '@/EntityLayer/Profile'

import cls from './ProfilePage.module.scss'
import { WithLogo } from '@/SharedLayer/ui/Layouts'
import { useAppDispatch } from '@/SharedLayer/lib/hooks/useAppDispatch'

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <WithLogo>
      <div className={clsx(cls.ProfileModule)}>
        <ProfileForm />
        <CoverForm />
      </div>
    </WithLogo>
  )
}
export default ProfilePage
