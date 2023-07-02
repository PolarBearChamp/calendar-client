import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
interface IProps {
  text: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<IProps> = ({ text, onClick }) => {
  return (
    <button
      className={classNames(styles.primary, styles.cursor)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
