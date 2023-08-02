import React, { useCallback, useState } from "react"

import { ICalendarItem, ModalPosition, RenderCalendarItem } from "@/src/types"
import Day from "./Day/Day"
import styles from "./Calendar.module.scss"

interface IProps {
    items: ICalendarItem[]
    offset: number
    //children: RenderCalendarItem
}

const Calendar: React.FC<IProps> = ({ items, offset }) => {
    const [isPopupVisible, setPopupVisible] = useState<boolean>(false)
    const [clickPosition, setClickPosition] = useState<ModalPosition>({
        x: 0,
        y: 0,
    })

    const openPopup = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setClickPosition({ x: e.clientX, y: e.clientY })
        setPopupVisible(true)
    }, [])

    const closePopup = () => {
        setPopupVisible(false)
    }

    return (
        <div className={styles.container}>
            {offset > 0 &&
                Array(offset)
                    .fill(undefined)
                    .map((_, i) => {
                        return <Day key={i} mock={true} />
                    })}
            {items.map((el, i) => {
                return (
                    <Day
                        key={el.day}
                        day={el.day}
                        back={el?.cover}
                        openPopup={openPopup}
                        closePopup={closePopup}
                        clickPosition={clickPosition}
                        isPopupVisible={isPopupVisible}
                    />
                )
            })}
        </div>
    )
}

export default Calendar
