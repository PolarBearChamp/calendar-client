import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./Button.module.scss";
import classNames from "classnames";

interface IProps {
  image: any;
  imageOnHover?: any;
  route: string;
  icon?: string;
}

const UserControlButton = ({ route, icon, image, imageOnHover }: IProps) => {
  const router = useRouter();

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  let totalImage = hovered && imageOnHover ? imageOnHover : image;
  let totalStyles = hovered && !imageOnHover ? styles.controlsHover : "";
  return (
    <Image
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(styles.cursor, styles.controls, totalStyles)}
      src={totalImage}
      alt=""
      onClick={() => {
        router.push(`/${route}`);
      }}
    />
    // <Image
    //   className={styles.cursor}
    //   src={`/icons/${icon}`}
    //   alt=""
    //   width={40}
    //   height={40}
    //   onClick={() => {
    //     router.push(`/${route}`);
    //   }}
    // />
  );
};

export default UserControlButton;
