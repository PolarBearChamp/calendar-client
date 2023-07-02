import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import classNames from "classnames";

import { ModalPosition } from "@/src/types";

import DayControlPopUp from "@/src/ui/popup/DayControlPopUp";

import styles from "./Day.module.scss";

interface Props {
  day: number;
  back?: string;
}
const Day = ({ day, back }: Props) => {
  const [isPopupVisible, setPopupVisible] = useState<Boolean>(false);
  const [clickPosition, setClickPosition] = useState<ModalPosition>({
    x: 0,
    y: 0,
  });

  const openPopup = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setClickPosition({ x: e.clientX, y: e.clientY });
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  if (!!back) {
    return (
      <>
        <div className={styles.container} onClick={openPopup}>
          <span className={classNames(styles.number, styles.withBack)}>
            {day}
          </span>
          <Image
            src={`${back}`}
            alt=""
            width={100}
            height={100}
            className={styles.back}
          />
        </div>
        {isPopupVisible &&
          ReactDOM.createPortal(
            <DayControlPopUp onClose={closePopup} position={clickPosition} />,
            document.getElementById("popup-root")!
          )}
      </>
    );
  } else {
    return (
      <>
        <div className={classNames(styles.container)} onClick={openPopup}>
          <span className={styles.number}>{day}</span>
          {isPopupVisible &&
            ReactDOM.createPortal(
              <DayControlPopUp onClose={closePopup} position={clickPosition} />,
              document.getElementById("popup-root")!
            )}
        </div>
      </>
    );
  }
};

export default Day;
