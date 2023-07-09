import React from "react"
import Image from "next/image"
import classNames from "classnames"

import styles from "./DayControlElements.module.scss"
import { DAY_CONTROL_ACTION } from "@/src/types"

interface IProps {
    text: string
    action: DAY_CONTROL_ACTION
    onClick: () => void
}

const DayControlButton: React.FC<IProps> = ({ text, action }) => {
    const colorStyle = action === DAY_CONTROL_ACTION.DELETE ? styles.red : styles.blue

    const getActionIcon = () => {
        switch (action) {
            case DAY_CONTROL_ACTION.EDIT:
                return "edit.svg"
            case DAY_CONTROL_ACTION.SHARE:
                return "share.svg"
            case DAY_CONTROL_ACTION.DELETE:
                return "delete.svg"
        }
    }

    const icon = getActionIcon()

    return (
        <button className={classNames(styles.button, colorStyle)}>
            <Image src={`/icons/${icon}`} alt="icon" width={17} height={17} />
            {text}
        </button>
    )
}

export default DayControlButton
