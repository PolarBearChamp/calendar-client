import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface IProps {
  route: string,
  icon: string
}

const UserControlButton = ({ route, icon }: IProps) => {

  const router = useRouter()


  return (
    <Image
      src={`/icons/${icon}`}
      alt=''
      width={40}
      height={40}
      onClick={() => { router.push(`/${route}`) }}
      className='cursor-pointer'
    />
  )
}

export default UserControlButton