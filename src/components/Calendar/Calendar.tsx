import { ICalendarItem } from "@/src/types"
import Day from "./Day/Day"
import cls from "./Calendar.module.scss"

interface IProps {
    items: ICalendarItem[]
    offset: number
}

const Calendar: React.FC<IProps> = ({ items, offset }) => {
    return (
        <div className={cls.container}>
            {offset > 0 &&
                Array(offset)
                    .fill(undefined)
                    .map((_, i) => {
                        return <Day key={i} mock={true} />
                    })}
            {items.map((el) => {
                return <Day key={el.day} day={el.day} back={el?.cover} />
            })}
        </div>
    )
}

export default Calendar
