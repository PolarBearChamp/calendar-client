import React, { InputHTMLAttributes } from "react"
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form"
import cls from "./Checkbox.module.scss"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<FieldValues>
    options?: RegisterOptions
}

const PrimaryCheckbox: React.FC<IProps> = ({ register, options, ...rest }) => {
    return (
        <input
            type="checkbox"
            className={cls.primary}
            {...register(rest.name!, options)}
            {...rest}
        />
    )
}

export default PrimaryCheckbox
