import Image from "next/image"
import { clsx } from "clsx"

import { ISlideItemData } from "@/src/types"
import cls from "./SlideItem.module.scss"

const SlideItem: React.FC<ISlideItemData> = ({ text, type, image }) => (
    <div
        className={clsx(cls.container, {
            [cls.text]: type === "text",
        })}
    >
        {text}
        <Image src={image} alt="slideItem" width={200} height={200} className={cls.image} />
    </div>
)

export default SlideItem
