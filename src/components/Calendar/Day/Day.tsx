import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Image from "next/image"
import { clsx } from "clsx"

import DayControlPopUp from "@/src/ui/popup/DayControlPopUp"
import { ModalPosition } from "@/src/types"
import styles from "./Day.module.scss"

interface IProps {
    day: number
    back?: string
    openPopup: (e: React.MouseEvent<HTMLDivElement>) => void
    closePopup: (e: React.MouseEvent<HTMLDivElement>) => void
    clickPosition: ModalPosition
    isPopupVisible: boolean
}

const Day: React.FC<IProps> = ({
    day,
    back,
    openPopup,
    closePopup,
    clickPosition,
    isPopupVisible,
}) => {
    if (!!back) {
        return (
            <>
                <div className={styles.container} onClick={openPopup}>
                    <span className={clsx(styles.number, styles.withBack)}>{day}</span>
                    <Image
                        src={`${back}`}
                        alt=""
                        width={100}
                        height={100}
                        className={styles.back}
                    />
                </div>
                {isPopupVisible &&
                    ReactDOM.createPortal(
                        <DayControlPopUp onClose={closePopup} position={clickPosition} />,
                        document.getElementById("popup-root")!,
                    )}
            </>
        )
    }

    return (
        <>
            <div className={clsx(styles.container)} onClick={openPopup}>
                <span className={styles.number}>{day}</span>
                {isPopupVisible &&
                    ReactDOM.createPortal(
                        <DayControlPopUp onClose={closePopup} position={clickPosition} />,
                        document.getElementById("popup-root")!,
                    )}
            </div>
        </>
    )
}

export default Day
