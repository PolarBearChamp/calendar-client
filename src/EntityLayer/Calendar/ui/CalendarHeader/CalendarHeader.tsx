import { FC, useState } from 'react'
import { clsx } from 'clsx'

import cls from './CalendarHeader.module.scss'

interface IProps {
  active: number
}

export const CalendarHeader: FC<IProps> = ({ active }) => {
  const [isActive, setIsActive] = useState(false)
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  return (
    <div className={cls.container}>
      {days.map((day, i) => {
        return (
          <div
            key={i}
            className={clsx(active === i ? cls.selected : cls.default)}
          >
            {day[0]}
          </div>
        )
      })}
    </div>
  )
}
