import React from "react";
import Image from "next/image";
import NavigationButton from "../../ui/buttons/NavigationButton";

import styles from "./Navigation.module.scss";
import { NavigationAction } from "@/src/types";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <NavigationButton
        icon="next.svg"
        action={NavigationAction.Next}
        onClick={() => {
          console.log("next");
        }}
      />
      <NavigationButton
        icon="prev.svg"
        action={NavigationAction.Previous}
        onClick={() => {
          console.log("prev");
        }}
      />
    </div>
  );
};

export default Navigation;
