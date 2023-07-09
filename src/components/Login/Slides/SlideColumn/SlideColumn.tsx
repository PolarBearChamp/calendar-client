import React from "react"
import classNames from "classnames"

import SlideItem from "../SlideItem/SlideItem"
import styles from "./SlideColumn.module.scss"
import { ISlideItemData, SLIDE_MOVE_DIRECTION } from "@/src/types"

interface IProps {
    data: ISlideItemData[]
    direction: SLIDE_MOVE_DIRECTION
}

const SlideColumn: React.FC<IProps> = ({ data, direction }) => {
    const setStyleAnimation = () => {
        switch (direction) {
            case SLIDE_MOVE_DIRECTION.UP1:
                return styles.upFirst
                break
            case SLIDE_MOVE_DIRECTION.UP2:
                return styles.upSecond
                break
            case SLIDE_MOVE_DIRECTION.UP3:
                return styles.upThird
                break
        }
    }

    return (
        <div className={classNames(styles.container, setStyleAnimation())}>
            {data &&
                data.map((item, i) => {
                    return (
                        <SlideItem key={i} text={item.text} type={item.type} image={item.image} />
                    )
                })}
        </div>
    )
}

export default SlideColumn
