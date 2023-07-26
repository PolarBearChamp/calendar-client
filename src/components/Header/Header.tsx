import styles from "./Header.module.scss"

interface IProps {
    year: string
    month: string
}

const Header: React.FC<IProps> = ({ year, month }) => {
    return (
        <div className={styles.container}>
            <span className={styles.year}>{year}</span>
            <span>{month}</span>
        </div>
    )
}

export default Header
