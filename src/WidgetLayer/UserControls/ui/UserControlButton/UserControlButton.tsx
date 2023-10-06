import React, { FC, useCallback, useState } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import cls from './UserControlButton.module.scss'
import Image from 'next/image'

interface IProps {
  route: string
  type: UserControlType
  icon: string
  iconOnHover?: string
}

export const enum UserControlType {
  FRIENDS = 'friends',
  DISCOVERY = 'discovery',
  PROFILE = 'profile',
}

export const UserControlButton: FC<IProps> = ({
  route,
  type,
  icon,
  iconOnHover,
}) => {
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = useCallback(() => setIsHovered(true), [setIsHovered])
  const onMouseLeave = useCallback(() => setIsHovered(false), [setIsHovered])
  return (
    <Link
      href={route}
      className={clsx(cls.control, cls[type])}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <Image
          src={iconOnHover || icon}
          alt={'user control'}
          width={40}
          height={40}
        />
      ) : (
        <Image src={icon} alt={'user control'} width={40} height={40} />
      )}
    </Link>
  )
}
