import React, { useState } from "react"
import { clsx } from "clsx"

import styles from "./CalendarHeader.module.scss"

const CalendarHeader: React.FC = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.container}>
            <div className={clsx(isActive ? styles.selected : styles.default)}>S</div>
            <div className={clsx(isActive ? styles.selected : styles.default)}>M</div>
            <div className={clsx(isActive ? styles.selected : styles.default)}>T</div>
            <div className={clsx(isActive ? styles.selected : styles.default)}>W</div>
            <div className={clsx(!isActive ? styles.selected : styles.default)}>T</div>
            <div className={clsx(isActive ? styles.selected : styles.default)}>F</div>
            <div className={clsx(isActive ? styles.selected : styles.default)}>S</div>
        </div>
    )
}

export default CalendarHeader
