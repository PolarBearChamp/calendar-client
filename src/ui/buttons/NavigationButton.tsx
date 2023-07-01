import React from "react";
import Image from "next/image";

import styles from "./Button.module.scss";

interface IProps {
  icon: string;
  action: string;
  onClick: any;
}

const NavigationButton = ({ icon, action, onClick }: IProps) => {
  return (
    <div className={styles.button} onClick={onClick}>
      <Image
        src={`/icons/${icon}`}
        alt={`${action}`}
        width={35}
        height={30}
        className={styles.arrow}
      />
    </div>
  );
};

export default NavigationButton;
