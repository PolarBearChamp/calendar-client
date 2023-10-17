'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  format,
  getDay,
  getDaysInMonth,
  isValid,
  parse,
  startOfMonth,
} from 'date-fns'

import { Calendar, CalendarHeader, DateHeader } from '@/EntityLayer/Calendar'
import { UserControls } from '@/WidgetLayer/UserControls'
import { Navigation } from '@/FeatureLayer/Navigation'
import { ICalendarItem, ISongData } from '@/SharedLayer/model'

import cls from './CalendarPage.module.scss'

function isValidDateFormat(dateString: string) {
  const parsedDate = parse(dateString, 'yyyy-MM', new Date())
  return isValid(parsedDate)
}

const Page = ({ params }: { params: { date: string } }) => {
  const router = useRouter()

  // Выбранная дата из параметров
  const paramsDate = params.date
  // Месяц из параметров
  const paramsMonth = paramsDate.split('-')[1]
  // Год из параметров
  const paramsYear = paramsDate.split('-')[0]
  // Перевод месяца в вид строки
  const paramsMonthString = format(
    new Date(parseInt(paramsYear), parseInt(paramsMonth) - 1),
    'MMMM',
  )

  const [month, setMonth] = useState<string>(paramsMonthString)
  const [year, setYear] = useState<string>(paramsYear)

  // Выбранная дата в формате Date для получения сдвига
  const selectedDate = new Date(parseInt(paramsYear), parseInt(paramsMonth) - 1)
  // Дата, для перевода на текущий месяц, если формат из параметров некорректен
  const now = new Date()
  // Сдвиг от начала строки
  const offset = getDay(startOfMonth(selectedDate))

  useEffect(() => {
    // Если формат параметров корректен и месяц указан меньше 13, то устанавливается указанная дата
    if (isValidDateFormat(paramsDate) && parseInt(paramsMonth) < 13) {
      setMonth(paramsMonthString)
      setYear(paramsYear)
    }
    // Если нет, то происходит переход на текущий месяц
    else {
      router.push(`/home/${format(now, 'yyyy')}-${format(now, 'MM')}`)
    }
  }, [params.date, paramsMonth, paramsYear, now, router])

  // Следующий месяц
  const nextMonthHandle = useCallback(() => {
    const newMonth = format(
      new Date(parseInt(paramsYear), parseInt(paramsMonth)),
      'MM',
    )
    if (newMonth === '01') {
      router.push(`/home/${(parseInt(paramsYear) + 1).toString()}-${newMonth}`)
    } else {
      router.push(`/home/${paramsYear.toString()}-${newMonth}`)
    }
  }, [paramsYear, paramsMonth, router])

  // Предыдущий месяц
  const prevMonthHandle = useCallback(() => {
    const newMonth = format(
      new Date(parseInt(paramsYear), parseInt(paramsMonth) - 2),
      'MM',
    )
    if (newMonth === '12') {
      router.push(`/home/${(parseInt(paramsYear) - 1).toString()}-${newMonth}`)
    } else {
      router.push(`/home/${paramsYear.toString()}-${newMonth}`)
    }
  }, [paramsYear, paramsMonth, router])

  // test data
  const generateDataForCalendar = () => {
    const result: ICalendarItem[] = []

    for (let i = 1; i <= getDaysInMonth(selectedDate); i++) {
      const rand = Math.random()
      const id = (((rand * 10) % 10) + 4).toFixed(0)
      const data: Partial<ISongData> = {
        postId: id,
        cover: `/songs/${id}.png`,
        artist: 'Александр Розенбаум',
        name: 'Гоп-стоп',
      }
      if (i % 2 === 0) {
        result.push({ day: i, data })
      } else {
        result.push({
          day: i,
        })
      }
    }
    return result
  }

  return (
    <div className={cls.container}>
      <div className={cls.header}>
        <DateHeader year={year} month={month} />
      </div>
      <div className={cls.content}>
        <div className={cls.controls}>
          <UserControls />
        </div>
        <div className={cls.calendarHeader}>
          <CalendarHeader active={2} />
        </div>
        <div className={cls.calendar}>
          <Calendar offset={offset} items={generateDataForCalendar()} />
        </div>
        <div className={cls.navigation}>
          <Navigation nextMonth={nextMonthHandle} prevMonth={prevMonthHandle} />
        </div>
      </div>
    </div>
  )
}

export default Page
