import { FC } from 'react'

import cls from './DateHeader.module.scss'

interface IProps {
  year: string
  month: string
}

export const DateHeader: FC<IProps> = ({ year, month }) => {
  return (
    <div className={cls.container}>
      <span className={cls.year}>{year}</span>
      <span>{month}</span>
    </div>
  )
}
