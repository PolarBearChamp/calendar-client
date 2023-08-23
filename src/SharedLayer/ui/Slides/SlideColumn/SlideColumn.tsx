import { clsx } from 'clsx'

import SlideItem from '../SlideItem/SlideItem'
import {
  ISlideItemData,
  SLIDE_MOVE_DIRECTION,
} from './../../../model/types/types'
import cls from './SlideColumn.module.scss'

interface IProps {
  data: ISlideItemData[]
  direction: SLIDE_MOVE_DIRECTION
}

const SlideColumn: React.FC<IProps> = ({ data, direction }) => {
  const setStyleAnimation = () => {
    switch (direction) {
      case SLIDE_MOVE_DIRECTION.UP1:
        return cls.upFirst

      case SLIDE_MOVE_DIRECTION.UP2:
        return cls.upSecond

      case SLIDE_MOVE_DIRECTION.UP3:
        return cls.upThird
    }
  }

  return (
    <div className={clsx(cls.container, setStyleAnimation())}>
      {data &&
        data.map((item, i) => {
          return (
            <SlideItem
              key={i}
              text={item.text}
              type={item.type}
              image={item.image}
            />
          )
        })}
    </div>
  )
}

export default SlideColumn
