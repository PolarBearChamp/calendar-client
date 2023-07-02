import PrimaryButton from "@/src/ui/buttons/PrimaryButton";
import PrimaryInput from "@/src/ui/inputs/PrimaryInput";

import React from "react";

import styles from "./LoginForm.module.scss";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className={styles.loginForm}>
      <h1 className={styles.header}>Login</h1>
      <label htmlFor="email">
        Email
        <PrimaryInput
          id="email"
          name="email"
          type="email"
          placeholder="username@mail.com"
          onChange={() => {}}
        />
      </label>
      <label htmlFor="password">
        Password
        <PrimaryInput
          id="password"
          name="password"
          type="password"
          placeholder="password"
          onChange={() => {}}
        />
      </label>
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
