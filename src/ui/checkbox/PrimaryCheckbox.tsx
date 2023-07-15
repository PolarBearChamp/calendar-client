import React, { InputHTMLAttributes } from "react"
import styles from "./Checkbox.module.scss"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    register: any
    options?: {}
}

const PrimaryCheckbox: React.FC<IProps> = ({ register, options, ...rest }) => {
    return (
        <input
            type="checkbox"
            className={styles.primary}
            {...register(rest.name, options)}
            {...rest}
        />
    )
}

export default PrimaryCheckbox
