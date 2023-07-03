import { ISlideItemData, SlideItemType } from "@/src/types";
import Image from "next/image";
import React from "react";

import styles from "./SlideItem.module.scss";
import classNames from "classnames";

const SlideItem: React.FC<ISlideItemData> = ({ text, type, image }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.text]: type === "text",
      })}
    >
      {text}
      <Image src={image} alt="slideItem" width={200} height={200} />
    </div>
  );
};

export default SlideItem;
