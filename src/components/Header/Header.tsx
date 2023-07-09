import { useContext } from "react"

import DateContext from "@/src/modules/CalendarModule/CalendarModule"
import styles from "./Header.module.scss"

interface IProps {
    year: string
    month: string
}

const Header: React.FC<IProps> = ({ year, month }) => {
    const date = useContext(DateContext)
    return (
        <div className={styles.container}>
            <span className={styles.year}>{year}</span>
            <span>{month}</span>
        </div>
    )
}

export default Header
