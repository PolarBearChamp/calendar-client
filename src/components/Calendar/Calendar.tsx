import React, { useCallback, useState } from "react"

import { ICalendarItem, ModalPosition } from "@/src/types"
import Day from "./Day/Day"
import styles from "./Calendar.module.scss"

interface IProps {
    items: ICalendarItem[]
    offset: number
    //children: RenderCalendarItem
}

const Calendar: React.FC<IProps> = ({ items, offset }) => {
    return (
        <div className={styles.container}>
            {offset > 0 &&
                Array(offset)
                    .fill(undefined)
                    .map((_, i) => {
                        return <Day key={i} mock={true} />
                    })}
            {items.map((el, i) => {
                return <Day key={el.day} day={el.day} back={el?.cover} />
            })}
        </div>
    )
}

export default Calendar
