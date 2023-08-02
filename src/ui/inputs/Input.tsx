import { InputHTMLAttributes } from "react"
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form"
import { clsx } from "clsx"
import cls from "./Input.module.scss"

export const enum InputSize {
    S = "s",
    M = "m",
    L = "l",
}

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<FieldValues>
    textSize?: InputSize
    options?: RegisterOptions
}

const Input: React.FC<IProps> = ({ register, options, textSize, ...rest }) => (
    <input
        className={clsx(cls.primary, textSize && cls[textSize])}
        {...register(rest.name!, options)}
        {...rest}
    />
)

export default Input
