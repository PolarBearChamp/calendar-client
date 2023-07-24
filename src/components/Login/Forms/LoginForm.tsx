import React from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"

import { Button, ButtonTheme } from "@/src/ui/Buttons/Button"
import PrimaryInput from "@/src/ui/inputs/PrimaryInput"
import styles from "./LoginForm.module.scss"
import { ILoginData } from "@/src/types"
import { CustomLink, LinkTheme } from "@/src/ui/Links/CustomLink"

const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = handleSubmit((data) => console.log(data))
    console.log(errors)

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <h1 className={styles.header}>Login</h1>
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
            {errors.email && errors.email.type === "required" && <span>Поле обязательно</span>}
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
                <span>Поле обязательно</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
                <span>Минимальная длина 6 символов</span>
            )}
            <CustomLink href="/forget" theme={LinkTheme.DEFAULT}>
                bro, did you really forget the password?
            </CustomLink>
            <Button theme={ButtonTheme.PRIMARY}>Sign in</Button>
            <span>
                bro, you really don&apos;t have an account?
                <CustomLink href="/" theme={LinkTheme.DEFAULT}>
                    &nbsp;Sign up for free
                </CustomLink>
            </span>
        </form>
    )
}

export default LoginForm
