'use client'
import { FC } from 'react'
import { clsx } from 'clsx'
import cls from './ProfilePage.module.scss'
import { ProfileForm } from '@/components/Profile/ProfileForm'
import { CoverForm } from '@/components/Profile/CoverForm'

const ProfilePage: FC = () => {
  return (
    <div className={clsx(cls.ProfileModule)}>
      <ProfileForm />
      <CoverForm />
    </div>
  )
}
export default ProfilePage
