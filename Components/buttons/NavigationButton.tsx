import React from 'react'
import Image from 'next/image'
import next from '@/public/icons/next.svg'
interface IProps {
  icon: string
  action: string
  onClick: any
}

const NavigationButton = ({ icon, action, onClick }: IProps) => {
  return (
    <div
      className='shadow-buttons transition-all hover:bg-custom-blue w-16 h-16 flex items-center justify-center rounded-full'
      onClick={onClick}
    >
      <Image
        src={`/icons/${icon}`}
        alt={`${action}`}
        width={35}
        height={30}
        className='hover:fill-white'
      />
    </div>
  )
}

export default NavigationButton