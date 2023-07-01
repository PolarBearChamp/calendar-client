import Image from "next/image";
import React from "react";
import classNames from "classnames";
import styles from "./Day.module.scss";

interface Props {
  day: number;
  scene?: string;
}
const Day = ({ day, scene }: Props) => {
  if (!!scene) {
    return (
      <div className={classNames(styles.container)}>
        <span className={classNames(styles.number, styles.withBack)}>
          {day}
        </span>
        <Image
          src={`${scene}`}
          alt=""
          width={100}
          height={100}
          className={styles.back}
        />
      </div>
    );
  } else {
    return (
      <div className={classNames(styles.container)}>
        <span className={styles.number}>{day}</span>
      </div>
    );
  }
};

export default Day;
