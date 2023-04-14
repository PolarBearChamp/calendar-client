import React from 'react'
import Image from 'next/image'
import NavigationButton from '../buttons/NavigationButton'
const Navigation = () => {
  return (
    <div className='flex flex-col gap-3'>
      <NavigationButton
        icon='next.svg'
        action='Next'
        onClick={() => { console.log('next') }}
      />
      <NavigationButton
        icon='prev.svg'
        action='Previous'
        onClick={() => { console.log('prev') }}
      />
    </div>
  )
}

export default Navigation