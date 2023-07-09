import React from "react"

import LoginForm from "@/src/components/Login/LoginForm/LoginForm"
import Slides from "@/src/components/Login/Slides/Slides"
import styles from "./LoginModule.module.scss"

const LoginModule: React.FC = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
            <Slides />
        </div>
    )
}

export default LoginModule
