import React from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"

import { Button, ButtonTheme } from "@/src/ui/Buttons/Button"
import PrimaryInput from "@/src/ui/inputs/PrimaryInput"
import styles from "./LoginForm.module.scss"
import { ILoginData } from "@/src/types"
import { CustomLink, LinkTheme } from "@/src/ui/Links/CustomLink"
import { useRouter } from "next/navigation"

const LoginForm: React.FC = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        router.push("/home")
    })
    console.log(errors)

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <h1 className={styles.header}>Login</h1>
            <div className={styles.fields}>
                <label htmlFor="email">
                    Email
                    <PrimaryInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="username@mail.com"
                        register={register}
                        options={{ required: true }}
                    />
                </label>
                {errors.email && errors.email.type === "required" && (
                    <div className={styles.warning}>Поле обязательно</div>
                )}
                <label htmlFor="password">
                    Password
                    <PrimaryInput
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        register={register}
                        options={{ required: true, minLength: 6 }}
                    />
                </label>
                {errors.password && errors.password.type === "required" && (
                    <div className={styles.warning}>Поле обязательно</div>
                )}
                {errors.password && errors.password.type === "minLength" && (
                    <div className={styles.warning}>Минимальная длина 6 символов</div>
                )}
                <CustomLink href="/forget" theme={LinkTheme.DEFAULT}>
                    bro, did you really forget the password?
                </CustomLink>
            </div>
            <div className={styles.submit}>
                <Button theme={ButtonTheme.PRIMARY}>Sign in</Button>
                <span>
                    bro, you really don&apos;t have an account?
                    <CustomLink href="/signup" theme={LinkTheme.DEFAULT}>
                        &nbsp;Sign up for free
                    </CustomLink>
                </span>
            </div>
        </form>
    )
}

export default LoginForm
