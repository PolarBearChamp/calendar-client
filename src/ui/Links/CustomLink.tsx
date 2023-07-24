import { FC, HTMLAttributes, LinkHTMLAttributes } from "react"
import { clsx } from "clsx"
import cls from "./CustomLink.module.scss"
import Link from "next/link"

export const enum LinkTheme {
    NAVIGATION = "navigation",
    DISCOVERY = "discovery",
    FRIENDS = "friends",
    PROFILE = "profile",
    DEFAULT = "default",
}

export const enum LinkStatus {
    ACTIVE = "active",
    DEFAULT = "default",
}

interface CustomLinkDivProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    theme: LinkTheme
    status?: LinkStatus
}

interface CustomLinkProps extends CustomLinkDivProps {
    href: string
}

export const CustomLink: FC<CustomLinkProps> = (props) => {
    const { className, href, children, theme, status, ...otherProps } = props
    return (
        <Link href={href}>
            <div
                className={clsx(cls.CustomLink, className, cls[theme], cls[`${theme}__${status}`])}
                {...otherProps}
            >
                {children}
            </div>
        </Link>
    )
}
