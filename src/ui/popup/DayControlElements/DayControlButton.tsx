import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { DayControlAction } from "@/src/types";

import styles from "./DayControlElements.module.scss";

interface IProps {
  text: string;
  action: DayControlAction;
  onClick: () => void;
}

const DayControlButton: React.FC<IProps> = ({ text, action }) => {
  const colorStyle =
    action === DayControlAction.DELETE ? styles.red : styles.blue;

  let icon = "";

  switch (action) {
    case DayControlAction.EDIT:
      icon = "edit.svg";
      break;
    case DayControlAction.SHARE:
      icon = "share.svg";
      break;
    case DayControlAction.DELETE:
      icon = "delete.svg";
      break;
    default:
      break;
  }
  return (
    <button className={classNames(styles.button, colorStyle)}>
      <Image src={`/icons/${icon}`} alt="icon" width={17} height={17} />
      {text}
    </button>
  );
};

export default DayControlButton;
