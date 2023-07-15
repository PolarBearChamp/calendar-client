import PrimaryInput from "@/src/ui/inputs/PrimaryInput"
import React from "react"

import styles from "./LoginForm.module.scss"
import { useForm } from "react-hook-form"
import Link from "next/link"
import PrimaryButton from "@/src/ui/buttons/PrimaryButton"
import { ISignupData } from "@/src/types"
import classNames from "classnames"
import PrimaryCheckbox from "@/src/ui/checkbox/PrimaryCheckbox"

const SignupForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = handleSubmit((data) => console.log(data))
    console.log(errors)

    return (
        <form onSubmit={onSubmit} className={classNames(styles.form__signup)}>
            <h1 className={styles.header}>Create your account</h1>
            <label htmlFor="name">
                Name
                <PrimaryInput
                    id="name"
                    name="name"
                    type="name"
                    placeholder="your name"
                    register={register}
                    options={{ required: true }}
                />
            </label>
            {errors.name && errors.name.type === "required" && <span>Поле обязательно</span>}
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
            <div className={styles.policy}>
                <PrimaryCheckbox
                    id="policy"
                    name="policy"
                    register={register}
                    options={{ required: true }}
                />
                <span>
                    I’m bro and i agree to all{" "}
                    <Link href={"/agreements/term"} className={styles.link}>
                        Term
                    </Link>
                    ,{" "}
                    <Link href={"/agreements/policy"} className={styles.link}>
                        Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href={"/agreements/fees"} className={styles.link}>
                        Fees
                    </Link>
                    .
                </span>
            </div>
            <PrimaryButton text="Sign up" onClick={() => {}} />
            <div className={styles.footer}>
                bro, you really have an account?
                <Link href={"/"} className={styles.link}>
                    &nbsp;Log in
                </Link>
            </div>
        </form>
    )
}

export default SignupForm
