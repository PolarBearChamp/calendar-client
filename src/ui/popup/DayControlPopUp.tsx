import React from "react";
import classNames from "classnames";
import DayControlButton from "./DayControlElements/DayControlButton";
import { DayControlAction } from "@/src/types";
import DayControlLine from "./DayControlElements/DayControlLine";

import styles from './DayControlPopUp.module.scss'

const DayControlPopUp = () => {
  return (
    <div className={classNames(styles.container)}>
      <DayControlButton
        text="Edit"
        action={DayControlAction.EDIT}
        onClick={() => {}}
      />
      <DayControlLine />
      <DayControlButton
        text="Share"
        action={DayControlAction.SHARE}
        onClick={() => {}}
      />
      <DayControlButton
        text="Delete"
        action={DayControlAction.DELETE}
        onClick={() => {}}
      />
    </div>
  );
};

export default DayControlPopUp;
