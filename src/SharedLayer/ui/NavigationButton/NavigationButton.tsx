import Image from 'next/image'

import cls from './NavigationButton.module.scss'
import { FC } from 'react'
import { NAVIGATION_ACTION } from '@/SharedLayer/model'

interface IProps {
  icon: string
  action: NAVIGATION_ACTION
  onClick: () => void
}

export const NavigationButton: FC<IProps> = ({ icon, action, onClick }) => (
  <div className={cls.navigateButton} onClick={onClick}>
    <Image
      src={`${icon}`}
      alt={`${action}`}
      width={35}
      height={30}
      className={cls.arrow}
    />
  </div>
)
