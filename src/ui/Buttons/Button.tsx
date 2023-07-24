import { ButtonHTMLAttributes, FC } from "react"
import { clsx } from "clsx"
import cls from "./Button.module.scss"

export const enum ButtonTheme {
    PRIMARY = "primary",
    NAVIGATION = "navigation",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props
    return (
        <button className={clsx(cls.Button, className, cls[theme])} {...otherProps}>
            {children}
        </button>
    )
}
