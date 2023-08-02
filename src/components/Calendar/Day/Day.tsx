import Image from "next/image"
import { clsx } from "clsx"

import cls from "./Day.module.scss"

interface IProps {
    day?: number
    back?: string
    mock?: boolean
}

const Day: React.FC<IProps> = ({ day, back, mock }) => {
    if (!!back) {
        return (
            <div className={clsx(cls.container, { mock })}>
                <span className={clsx(cls.number, cls.withBack)}>{day}</span>
                <Image src={`${back}`} alt="" width={100} height={100} className={cls.back} />
            </div>
        )
    }

    return (
        <div className={clsx(cls.container, cls.mock)}>
            <span className={cls.number}>{day}</span>
        </div>
    )
}

export default Day
