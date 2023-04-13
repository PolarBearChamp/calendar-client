import Image from 'next/image'
import React from 'react'

interface Props {
  day: number
  scene?: string
}
const Day = ({ day, scene }: Props) => {
  return (
    <div className='shadow-custom w-36 h-36 rounded-xl py-3 px-4 relative  overflow-hidden'>
      <span className='absolute z-10'>
        {day}
      </span>
      <Image
        src={`${scene}`}
        alt='kek'
        fill
        className='absolute left-0 top-0 z-0'
      />
    </div>
  )
}

export default Day