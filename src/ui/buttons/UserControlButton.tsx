import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import styles from "./Button.module.scss"

interface IProps {
  route: string;
  icon: string;
}

const UserControlButton = ({ route, icon }: IProps) => {
  const router = useRouter();

  return (
    <Image
      className={styles.cursor}
      src={`/icons/${icon}`}
      alt=""
      width={40}
      height={40}
      onClick={() => {
        router.push(`/${route}`);
      }}
    />
  );
};

export default UserControlButton;
