import cls from './Navigation.module.scss'
import { FC } from 'react'
import { NavigationButton } from '@/SharedLayer/ui/NavigationButton/NavigationButton'
import { NAVIGATION_ACTION } from '@/SharedLayer/model'

interface IProps {
  nextMonth: () => void
  prevMonth: () => void
}

export const Navigation: FC<IProps> = ({ nextMonth, prevMonth }) => (
  <div className={cls.container}>
    <NavigationButton
      icon={'/icons/ArrowRight.svg'}
      action={NAVIGATION_ACTION.NEXT}
      onClick={nextMonth}
    />
    <NavigationButton
      icon={'/icons/ArrowLeft.svg'}
      action={NAVIGATION_ACTION.PREV}
      onClick={nextMonth}
    />
  </div>
)
