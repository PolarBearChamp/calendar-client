import { FC } from 'react'

import Day from './Day/Day'

import cls from './Calendar.module.scss'
import { ICalendarItem } from '@/SharedLayer/model'

interface IProps {
  items: ICalendarItem[]
  offset: number
}

export const Calendar: FC<IProps> = ({ items, offset }) => {
  return (
    <div className={cls.container}>
      {offset > 0 &&
        Array(offset)
          .fill(undefined)
          .map((_, i) => {
            return <Day key={i} mock />
          })}
      {items.map((el) => {
        if (el.data !== undefined && Object.keys(el.data).length > 0) {
          return <Day key={el.day} day={el.day} data={el.data} />
        }
        return <Day key={el.day} day={el.day} />
      })}
    </div>
  )
}
