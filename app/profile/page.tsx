'use client'
import { FC } from 'react'
import { clsx } from 'clsx'
import cls from './ProfilePage.module.scss'
import { CoverForm, ProfileForm } from '@/EntityLayer/Profile'

const ProfilePage: FC = () => {
  return (
    <div className={clsx(cls.ProfileModule)}>
      <ProfileForm />
      <CoverForm />
    </div>
  )
}
export default ProfilePage
