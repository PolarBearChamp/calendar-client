import Image from 'next/image'

import { Button, ButtonTheme } from '@/SharedLayer/ui/Button/Button'
import cls from './Navigation.module.scss'
import { FC } from 'react'

interface IProps {
  nextMonth: () => void
  prevMonth: () => void
}

export const Navigation: FC<IProps> = ({ nextMonth, prevMonth }) => (
  <div className={cls.container}>
    <Button theme={ButtonTheme.NAVIGATION} onClick={nextMonth}>
      <Image src="/icons/ArrowRight.svg" alt="next" width={35} height={35} />
    </Button>
    <Button theme={ButtonTheme.NAVIGATION} onClick={prevMonth}>
      <Image src="/icons/ArrowLeft.svg" alt="prev" width={35} height={35} />
    </Button>
  </div>
)