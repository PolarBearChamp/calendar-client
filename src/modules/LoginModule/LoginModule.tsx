import React from "react";

import styles from "./LoginModule.module.scss";
import Slides from "@/src/components/Login/Slides/Slides";
import LoginForm from "@/src/components/Login/LoginForm/LoginForm";

const LoginModule = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <Slides />
    </div>
  );
};

export default LoginModule;
