import React, { useState } from 'react'

const CalendarHeader = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className='grid grid-cols-7 gap-4 justify-items-center pb-1 text-xl  font-bold'>
      <div className={`${isActive ? "t text-blue-600" : "text-gray-400"}`}>S</div>
      <div className={`${isActive ? "t text-blue-600" : "text-gray-400"}`}>M</div>
      <div className={`${isActive ? "t text-blue-600" : "text-gray-400"}`}>T</div>
      <div className={`${!isActive ? "t text-blue-600" : "text-gray-400"}`}>W</div>
      <div className={`${isActive ? "t text-blue-600" : "text-gray-400"}`}>T</div>
      <div className={`${isActive ? "t text-blue-600" : "text-gray-400"}`}>F</div>
      <div className={`${isActive ? "t text-blue-600" : "text-gray-400"}`}>S</div>
    </div>
  )
}

export default CalendarHeader