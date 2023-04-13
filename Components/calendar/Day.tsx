import Image from 'next/image'
import React from 'react'

interface Props {
  day: number
  scene?: string
}
const Day = ({ day, scene }: Props) => {

  if (!!scene) {
    return (
      <div className='shadow-custom w-36 h-36 rounded-xl relative overflow-hidden'>
        <span className='absolute z-10 mt-3 ml-5 text-2xl font-bold text-white'>
          {day}
        </span>
        <Image
          src={`${scene}`}
          alt=''
          width={100}
          height={100}
          className='object-cover object-center h-full w-full brightness-50'
        />
      </div>
    )
  } else {
    return (
      <div className='shadow-custom w-36 h-36 rounded-xl relative  overflow-hidden'>
        <span className='absolute mt-3 ml-5 text-2xl font-bold'>
          {day}
        </span>
      </div>
    )
  }
}

export default Day