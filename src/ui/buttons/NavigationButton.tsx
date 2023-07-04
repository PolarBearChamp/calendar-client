import React from "react";
import Image from "next/image";

import styles from "./Button.module.scss";
import { NavigationAction } from "@/src/types";

interface IProps {
  icon: string;
  action: NavigationAction;
  onClick: () => void;
}

const NavigationButton = ({ icon, action, onClick }: IProps) => {
  return (
    <div className={styles.navigateButton} onClick={onClick}>
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
