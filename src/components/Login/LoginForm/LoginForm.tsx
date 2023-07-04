import PrimaryButton from "@/src/ui/buttons/PrimaryButton";
import PrimaryInput from "@/src/ui/inputs/PrimaryInput";

import React from "react";

import styles from "./LoginForm.module.scss";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { ILoginData } from "@/src/types";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));
  console.log(errors);

  return (
    <form onSubmit={onSubmit} className={styles.loginForm}>
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
      {errors.email && errors.email.type === "required" && (
        <span>Поле обязательно</span>
        )}
      <label htmlFor="password">
        Password
        <PrimaryInput
          id="password"
          name="password"
          type="password"
          placeholder="password"
          register={register}
          options={{ required: true, minLength: 10 }}
        />
      </label>
      {errors.password && errors.password.type === "required" && (
        <span>Поле обязательно</span>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <span>Минимальная длина 6 символов</span>
      )}
      <Link href={"/forget"} className={styles.link}>
        bro, did you really forget the password?
      </Link>
      <PrimaryButton text="Sign in" onClick={() => {}} />
      <span>
        bro, you really don{"'"}t have an account?
        <Link href={"/signup"} className={styles.link}>
          {" "}
          Sign up for free
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
