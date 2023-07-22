import React, { useEffect, useRef } from "react"
import { clsx } from "clsx"

import DayControlButton from "./DayControlElements/DayControlButton"
import Devider from "./DayControlElements/Devider"
import { DAY_CONTROL_ACTION, ModalPosition } from "@/src/types"
import styles from "./DayControlPopUp.module.scss"

interface IProps {
    onClose: any
    position: ModalPosition
}

const DayControlPopUp: React.FC<IProps> = ({ onClose, position: { x, y } }) => {
    const popupRef = useRef<HTMLDivElement>(null)

    const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                onClose()
            }
        }

        document.addEventListener("click", handleOutsideClick)
        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [onClose])

    console.log(x, y)

    return (
        <div
            className={clsx(styles.container)}
            style={{ top: y, left: x }}
            onClick={handlePopupClick}
            ref={popupRef}
        >
            <DayControlButton text="Edit" action={DAY_CONTROL_ACTION.EDIT} onClick={() => {}} />
            <Devider />
            <DayControlButton text="Share" action={DAY_CONTROL_ACTION.SHARE} onClick={() => {}} />
            <DayControlButton text="Delete" action={DAY_CONTROL_ACTION.DELETE} onClick={() => {}} />
        </div>
    )
}

export default DayControlPopUp
