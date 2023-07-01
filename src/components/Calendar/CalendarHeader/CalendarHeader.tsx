import React, { useState } from "react";

import classNames from "classnames";
import styles from "./CalendarHeader.module.scss";

const CalendarHeader = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={classNames(isActive ? styles.selected : styles.default)}>
        S
      </div>
      <div className={classNames(isActive ? styles.selected : styles.default)}>
        M
      </div>
      <div className={classNames(isActive ? styles.selected : styles.default)}>
        T
      </div>
      <div className={classNames(isActive ? styles.selected : styles.default)}>
        W
      </div>
      <div className={classNames(!isActive ? styles.selected : styles.default)}>
        T
      </div>
      <div className={classNames(isActive ? styles.selected : styles.default)}>
        F
      </div>
      <div className={classNames(isActive ? styles.selected : styles.default)}>
        S
      </div>
    </div>
  );
};

export default CalendarHeader;
