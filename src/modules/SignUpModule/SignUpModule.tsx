import React from "react"
import styles from "./SignUpModule.module.scss"
import SignupForm from "@/src/components/Login/Forms/SignupForm"

const SignUpModule = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bg}></div>
            <SignupForm />
        </div>
    )
}

export default SignUpModule
