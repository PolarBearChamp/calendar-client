'use client'
import { FC } from 'react'
import { clsx } from 'clsx'

import { CoverForm, ProfileForm } from '@/EntityLayer/Profile'

import cls from './ProfilePage.module.scss'

const ProfilePage: FC = () => {
  return (
    <div className={clsx(cls.ProfileModule)}>
      <ProfileForm />
      <CoverForm />
    </div>
  )
}
export default ProfilePage
