import React, { useState } from "react"
import { clsx } from "clsx"

import styles from "./CalendarHeader.module.scss"
interface IProps {
    active: number
}
const CalendarHeader: React.FC<IProps> = ({ active }) => {
    const [isActive, setIsActive] = useState(false)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return (
        <div className={styles.container}>
            {days.map((day, i) => {
                return (
                    <div key={i} className={clsx(active === i ? styles.selected : styles.default)}>
                        {day[0]}
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarHeader
