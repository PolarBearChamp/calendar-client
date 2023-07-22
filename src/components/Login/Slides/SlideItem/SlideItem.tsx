import React from "react"
import Image from "next/image"
import { clsx } from "clsx"

import { ISlideItemData, SlideItemType } from "@/src/types"
import styles from "./SlideItem.module.scss"

const SlideItem: React.FC<ISlideItemData> = ({ text, type, image }) => (
    <div
        className={clsx(styles.container, {
            [styles.text]: type === "text",
        })}
    >
        {text}
        <Image src={image} alt="slideItem" width={200} height={200} className={styles.image} />
    </div>
)

export default SlideItem
