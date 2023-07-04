import React from "react";
import SlideItem from "../SlideItem/SlideItem";

import styles from "./SlideColumn.module.scss";
import { ISlideItemData } from "@/src/types";
import classNames from "classnames";

interface IProps {
  data: ISlideItemData[];
  direction: "UP1" | "UP2" | "UP3";
}

const SlideColumn: React.FC<IProps> = ({ data, direction }) => {
  const styleByDirection =
    direction === "UP1"
      ? styles.upFirst
      : direction === "UP2"
      ? styles.upSecond
      : styles.upThird;

  return (
    <div className={classNames(styles.container, styleByDirection)}>
      {data &&
        data.map((item, i) => {
          return (
            <SlideItem
              key={i}
              text={item.text}
              type={item.type}
              image={item.image}
            />
          );
        })}
    </div>
  );
};

export default SlideColumn;
