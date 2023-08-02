import cls from "./Header.module.scss"

interface IProps {
    year: string
    month: string
}

const Header: React.FC<IProps> = ({ year, month }) => {
    return (
        <div className={cls.container}>
            <span className={cls.year}>{year}</span>
            <span>{month}</span>
        </div>
    )
}

export default Header
