import { FC } from 'react'

import Day from './Day/Day'
import { ICalendarItem } from '@/types'

import cls from './Calendar.module.scss'

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
            return <Day key={i} mock={true} />
          })}
      {items.map((el) => {
        return <Day key={el.day} day={el.day} back={el?.cover} />
      })}
    </div>
  )
}
