import React, { InputHTMLAttributes } from "react"
import { clsx } from "clsx"
import styles from "./Input.module.scss"

export const enum InputSize {
    S = "s",
    M = "m",
    L = "l",
}

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    register: any
    textSize?: InputSize
    options?: {}
}

const Input: React.FC<IProps> = ({ register, options, textSize, ...rest }) => (
    <input
        className={clsx(styles.primary, textSize && styles[textSize])}
        {...register(rest.name, options)}
        {...rest}
    />
)

export default Input
