import { InputType } from "@/src/types";
import React from "react";

import styles from "./Input.module.scss";

interface IProps {
  id: string;
  name: string;
  type: InputType;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrimaryInput: React.FC<IProps> = ({
  id,
  name,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.primary}
    />
  );
};

export default PrimaryInput;
