import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
    addMonths,
    format,
    subMonths,
    getDaysInMonth,
    getDate,
    getDay,
    startOfMonth,
} from "date-fns"

import CalendarHeader from "@/src/components/Calendar/CalendarHeader/CalendarHeader"
import UserControls from "@/src/components/UserControls/UserControls"
import Navigation from "@/src/components/Navigation/Navigation"
import Calendar from "@/src/components/Calendar/Calendar"
import Header from "@/src/components/Header/Header"
import { ICalendarItem } from "@/src/types"
import cls from "./CalendarModule.module.scss"

interface IProps {
    params: { date: string }
}

const REG = /^\d{4}-\d{2}$/gm

const CalendarModule: React.FC<IProps> = ({ params }) => {
    const router = useRouter()

    const paramsMonth = params.date.split("-")[1]
    const paramsYear = params.date.split("-")[0]
    const paramsMonthString = format(
        new Date(parseInt(paramsYear), parseInt(paramsMonth) - 1),
        "MMMM",
    )
    const [month, setMonth] = useState<string>(paramsMonthString)
    const [year, setYear] = useState<string>(paramsYear)

    const selectedDate = new Date(parseInt(paramsYear), parseInt(paramsMonth) - 1)
    const now = new Date()

    const offset = getDay(startOfMonth(selectedDate))

    useEffect(() => {
        if (REG.test(params.date) && parseInt(paramsMonth) < 13) {
            setMonth(paramsMonthString)
            setYear(paramsYear)
        }
        // ломает всё
        //  else {
        //     router.push(`/home/${format(now, "yyyy")}-${format(now, "MM")}`)
        // }
    }, [])

    const nextMonthHandle = useCallback(() => {
        const newMonth = format(new Date(parseInt(paramsYear), parseInt(paramsMonth)), "MM")
        if (newMonth === "01") {
            router.push(`/home/${(parseInt(paramsYear) + 1).toString()}-${newMonth}`)
        } else {
            router.push(`/home/${paramsYear.toString()}-${newMonth}`)
        }
    }, [paramsYear, paramsMonth, router])

    const prevMonthHandle = useCallback(() => {
        const newMonth = format(new Date(parseInt(paramsYear), parseInt(paramsMonth) - 2), "MM")
        if (newMonth === "12") {
            router.push(`/home/${(parseInt(paramsYear) - 1).toString()}-${newMonth}`)
        } else {
            router.push(`/home/${paramsYear.toString()}-${newMonth}`)
        }
    }, [paramsYear, paramsMonth, router])

    const generateDataForCalendar = () => {
        const result: ICalendarItem[] = []
        for (let i = 1; i <= getDaysInMonth(selectedDate); i++) {
            const rand = Math.random()
            const id = (((rand * 10) % 10) + 4).toFixed(0)

            result.push({
                day: i,
                cover: `/songs/${id}.png`,
                link: "https://github.com/",
            })
        }

        return result
    }

    const getOffset = () => {}

    console.log(REG.test(params.date), parseInt(paramsMonth) < 13)
    console.log(month, year)

    return (
        <div className={cls.container}>
            <div className={cls.header}>
                <Header year={year} month={month} />
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

export default CalendarModule
