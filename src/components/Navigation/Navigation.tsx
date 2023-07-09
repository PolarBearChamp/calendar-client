import React from "react"

import NavigationButton from "../../ui/buttons/NavigationButton"
import { NAVIGATION_ACTION } from "@/src/types"
import styles from "./Navigation.module.scss"

interface IProps {
    nextMonth: () => void
    prevMonth: () => void
}

const Navigation: React.FC<IProps> = ({ nextMonth, prevMonth }) => (
    <div className={styles.container}>
        <NavigationButton icon="next.svg" action={NAVIGATION_ACTION.NEXT} onClick={nextMonth} />
        <NavigationButton icon="prev.svg" action={NAVIGATION_ACTION.PREV} onClick={prevMonth} />
    </div>
)

export default Navigation
