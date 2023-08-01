import React from "react"
import styles from "./SignUpModule.module.scss"
import SignupForm from "@/src/components/Login/Forms/SignupForm"
import Image from "next/image"

const SignUpModule = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bg}>
                <Image src="/bg/auth.jpg" alt="bg" fill style={{ objectFit: "contain" }} />
            </div>
            <SignupForm />
        </div>
    )
}

export default SignUpModule
