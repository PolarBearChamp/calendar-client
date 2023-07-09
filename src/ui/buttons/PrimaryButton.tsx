import React, { ButtonHTMLAttributes } from "react"
import classNames from "classnames"

import styles from "./Button.module.scss"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

const PrimaryButton: React.FC<IProps> = ({ text, onClick, ...rest }) => (
    <button className={classNames(styles.primary, styles.cursor)} {...rest}>
        {text}
    </button>
)

export default PrimaryButton
