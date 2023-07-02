import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import DayControlButton from "./DayControlElements/DayControlButton";
import { DayControlAction, ModalPosition } from "@/src/types";
import DayControlLine from "./DayControlElements/DayControlLine";

import styles from "./DayControlPopUp.module.scss";

interface IProps {
  onClose: () => void;
  position: ModalPosition;
}

const DayControlPopUp: React.FC<IProps> = ({ onClose, position: { x, y } }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  console.log(x, y);

  return (
    <div
      className={classNames(styles.container)}
      style={{ top: y, left: x }}
      onClick={handlePopupClick}
      ref={popupRef}
    >
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
