import React, { InputHTMLAttributes } from "react"

import styles from "./Input.module.scss"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    register: any
    options?: {}
}

const PrimaryInput: React.FC<IProps> = ({ register, options, ...rest }) => (
    <input className={styles.primary} {...register(rest.name, options)} {...rest} />
)

export default PrimaryInput
