import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Image from "next/image"
import { clsx } from "clsx"

import styles from "./Day.module.scss"

interface IProps {
    day?: number
    back?: string
    mock?: boolean
}

const Day: React.FC<IProps> = ({ day, back, mock }) => {
    if (!!back) {
        return (
            <div className={clsx(styles.container, { mock })}>
                <span className={clsx(styles.number, styles.withBack)}>{day}</span>
                <Image src={`${back}`} alt="" width={100} height={100} className={styles.back} />
            </div>
        )
    }

    return (
        <div className={clsx(styles.container, styles.mock)}>
            <span className={styles.number}>{day}</span>
        </div>
    )
}

export default Day
