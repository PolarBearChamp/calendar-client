"use client"
import React, { createContext, useEffect, useState } from "react"
import { addMonths, format, subMonths } from "date-fns"

import CalendarHeader from "@/src/components/Calendar/CalendarHeader/CalendarHeader"
import UserControls from "@/src/components/UserControls/UserControls"
import Navigation from "@/src/components/Navigation/Navigation"
import Calendar from "@/src/components/Calendar/Calendar"
import Header from "@/src/components/Header/Header"
import styles from "./CalendarModule.module.scss"
import { ICalendarItem, IDateContext } from "@/src/types"

const CalendarModule: React.FC = () => {
    const data: ICalendarItem[] = [
        { day: 1, cover: "/songs/1.webp", link: "https://github.com/" },
        { day: 2, cover: "/songs/2.webp", link: "https://github.com/" },
        { day: 3 },
        { day: 4 },
        { day: 5 },
        { day: 6, cover: "/songs/1.webp", link: "https://github.com/" },
        { day: 7, cover: "/songs/2.webp", link: "https://github.com/" },
        { day: 8 },
        { day: 9, cover: "/songs/1.webp", link: "https://github.com/" },
        { day: 10, cover: "/songs/1.webp", link: "https://github.com/" },
        { day: 11 },
        { day: 12 },
        { day: 13 },
        { day: 14 },
        { day: 15 },
        { day: 16 },
        { day: 17, cover: "/songs/2.webp", link: "https://github.com/" },
        { day: 18, cover: "/songs/2.webp", link: "https://github.com/" },
        { day: 19 },
        { day: 20 },
        { day: 21 },
        { day: 22 },
        { day: 23 },
        { day: 24 },
        { day: 25, cover: "/songs/1.webp", link: "https://github.com/" },
        { day: 26 },
        { day: 27 },
        { day: 28 },
        { day: 29 },
        { day: 30, cover: "/songs/2.webp", link: "https://github.com/" },
    ]
    const today = new Date()

    const currentMonth = format(today, "MMMM")
    const currentYear = format(today, "yyyy")

    const [month, setMonth] = useState(currentMonth)
    const [year, setYear] = useState(currentYear)

    const DateContext = createContext<IDateContext>({
        month: month,
        year: year,
    })

    useEffect(() => {
        setMonth(currentMonth)
        setYear(currentYear)
    }, [currentMonth, currentYear])

    const nextMonthHandle = () => {
        format(addMonths(new Date(), 1), "MMMM")
        console.log("click next")
    }

    const prevMonthHandle = () => {
        format(subMonths(new Date(), 1), "MMMM")
        console.log("click prev")
    }
    console.log(month, year)

    return (
        //<DateContext.Provider value={{ month: month, year: year }}>
        <div className={styles.container}>
            <div className={styles.header}>
                <Header year={year} month={month} />
            </div>
            <div className={styles.content}>
                <div className={styles.controls}>
                    <UserControls />
                </div>
                <div className={styles.calendarHeader}>
                    <CalendarHeader />
                </div>
                <div className={styles.calendar}>
                    <Calendar items={data} />
                </div>
                <div className={styles.navigation}>
                    <Navigation nextMonth={nextMonthHandle} prevMonth={prevMonthHandle} />
                </div>
            </div>
            <div id="popup-root"></div>
        </div>
        /*       // Прикол с картинкой на фоне
      <div className={styles.back}></div> */
        //</DateContext.Provider>
    )
}

export default CalendarModule
