import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import Header from '@/Components/layout/Header'
import Calendar from '@/Components/calendar/Calendar'
import Navigation from '@/Components/navigation/Navigation'
import UserControls from '@/Components/navigation/UserControls'
import CalendarHeader from '@/Components/calendar/CalendarHeader'

const CalendarModule = () => {
  const today = new Date()
  const currentMonth = format(today, 'MMMM')
  const currentYear = format(today, 'yyyy')

  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)

  useEffect(() => {
    setMonth(currentMonth)
    setYear(currentYear)
  }, [currentMonth, currentYear])

  return (
    <div className='grid grid-cols-layout grid-rows-header mx-auto max-w-main gap-y-12 gap-x-16'>
      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        <Header year={year} month={month} />
      </div>
      <div className='grid grid-cols-layout grid-rows-layout col-start-1 col-end-4 row-start-2 row-end-3 gap-x-16 max-w-main w-full'>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3">
          <UserControls />
        </div>
        <div className='col-start-2 col-end-3 row-start-1 row-end-2'>
          <CalendarHeader />
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3">
          <Calendar />
        </div>
        <div className="col-start-3 col-end-4 row-start-2 row-end-3">
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default CalendarModule