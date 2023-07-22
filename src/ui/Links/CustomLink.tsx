import { FC } from "react"
import { clsx } from "clsx"
import cls from "./CustomLink.module.scss"
import Link from "next/link"

export const enum LinkType {
    NAVIGATION = "navigation",
    DISCOVERY = "discovery",
    FRIENDS = "friends",
}

interface CustomLinkProps {
    className?: string
    href: string
}

export const CustomLink: FC<CustomLinkProps> = (props) => {
    const { className, href } = props
    return (
        <Link href={href}>
            <div className={clsx(cls.CustomLink, {}, [className])}>CustomLink</div>
        </Link>
    )
}
