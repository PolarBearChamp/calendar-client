import React from 'react'
import CalendarHeader from './CalendarHeader'
import Day from './Day'

const Calendar = () => {
  return (
    <div>
      <CalendarHeader />
      <div className='grid grid-cols-7 gap-4 justify-items-center'>
        <Day
          day={1}
          scene='/songs/2.webp'
        />

      </div>
    </div>
  )
}

export default Calendar