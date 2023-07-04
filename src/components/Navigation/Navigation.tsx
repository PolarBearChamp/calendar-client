import React from "react";
import Image from "next/image";
import NavigationButton from "../../ui/buttons/NavigationButton";

import styles from "./Navigation.module.scss";
import { NavigationAction } from "@/src/types";

interface IProps {
  nextMonth: () => void;
  prevMonth: () => void;
}

const Navigation: React.FC<IProps> = ({ nextMonth, prevMonth }) => {
  return (
    <div className={styles.container}>
      <NavigationButton
        icon="next.svg"
        action={NavigationAction.Next}
        onClick={nextMonth}
      />
      <NavigationButton
        icon="prev.svg"
        action={NavigationAction.Previous}
        onClick={prevMonth}
      />
    </div>
  );
};

export default Navigation;
