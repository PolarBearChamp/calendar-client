import { FC } from "react"
import { clsx } from "clsx"

import cls from "./FriendsModule.module.scss"

interface FriendsModuleProps {
    className?: string
}

export const FriendsModule: FC<FriendsModuleProps> = ({ className }) => {
    return <div className={clsx(cls.FriendsModule, [className])}></div>
}
