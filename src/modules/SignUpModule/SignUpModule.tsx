import Image from "next/image"

import SignupForm from "@/src/components/Login/Forms/SignupForm"
import cls from "./SignUpModule.module.scss"

const SignUpModule = () => {
    return (
        <div className={cls.container}>
            <div className={cls.bg}>
                <Image src="/bg/auth.jpg" alt="bg" fill className={cls.image} />
            </div>
            <SignupForm />
        </div>
    )
}

export default SignUpModule
