import React from "react";
import SlideColumn from "./SlideColumn/SlideColumn";

import styles from "./Slides.module.scss";
import { ISlideItemData } from "@/src/types";

const Slides = () => {
  const data: ISlideItemData[][] = [
    [
      { text: "02.12.20", type: "date", image: "/songs/8.png" },
      { text: "02.12.20", type: "date", image: "/songs/9.png" },
      { text: "02.12.20", type: "date", image: "/songs/10.png" },
      { text: "02.12.20", type: "date", image: "/songs/3.png" },
      { text: "02.12.20", type: "date", image: "/songs/4.png" },
      { text: "02.12.20", type: "date", image: "/songs/5.png" },
      { text: "a trail", type: "text", image: "/songs/6.png" },
      { text: "different", type: "text", image: "/songs/7.png" },
      { text: "02.12.20", type: "date", image: "/songs/8.png" },
      { text: "02.12.20", type: "date", image: "/songs/9.png" },
      { text: "02.12.20", type: "date", image: "/songs/10.png" },
      { text: "02.12.20", type: "date", image: "/songs/8.png" },
      { text: "02.12.20", type: "date", image: "/songs/9.png" },
      { text: "02.12.20", type: "date", image: "/songs/10.png" },
      { text: "02.12.20", type: "date", image: "/songs/11.png" },
    ],
    [
      { text: "02.12.20", type: "date", image: "/songs/3.png" },
      { text: "02.12.20", type: "date", image: "/songs/9.png" },
      { text: "02.12.20", type: "date", image: "/songs/8.png" },
      { text: "02.12.20", type: "date", image: "/songs/9.png" },
      { text: "02.12.20", type: "date", image: "/songs/10.png" },
      { text: "02.12.20", type: "date", image: "/songs/5.png" },
      { text: "02.12.20", type: "date", image: "/songs/12.png" },
      { text: "02.12.20", type: "date", image: "/songs/10.png" },
      { text: "02.12.20", type: "date", image: "/songs/7.png" },
      { text: "Music is", type: "text", image: "/songs/11.png" },
      { text: "back to", type: "text", image: "/songs/6.png" },
      { text: "of your life.", type: "text", image: "/songs/5.png" },
      { text: "02.12.20", type: "date", image: "/songs/4.png" },
      { text: "02.12.20", type: "date", image: "/songs/3.png" },
      { text: "02.12.20", type: "date", image: "/songs/9.png" },
      { text: "02.12.20", type: "date", image: "/songs/8.png" },
      { text: "02.12.20", type: "date", image: "/songs/9.png" },
      { text: "02.12.20", type: "date", image: "/songs/10.png" },
      { text: "02.12.20", type: "date", image: "/songs/3.png" },
      { text: "02.12.20", type: "date", image: "/songs/4.png" },
      { text: "02.12.20", type: "date", image: "/songs/5.png" },
    ],
    [
      { text: "02.12.20", type: "date", image: "/songs/8.png" },
      { text: "02.12.20", type: "date", image: "/songs/9.png" },
      { text: "02.12.20", type: "date", image: "/songs/10.png" },
      { text: "02.12.20", type: "date", image: "/songs/3.png" },
      { text: "02.12.20", type: "date", image: "/songs/4.png" },
      { text: "02.12.20", type: "date", image: "/songs/5.png" },
      { text: "that u can follow", type: "text", image: "/songs/4.png" },
      { text: "times", type: "text", image: "/songs/7.png" },
      { text: "02.12.20", type: "date", image: "/songs/8.png" },
      { text: "02.12.20", type: "date", image: "/songs/9.png" },
      { text: "02.12.20", type: "date", image: "/songs/10.png" },
      { text: "02.12.20", type: "date", image: "/songs/8.png" },
      { text: "02.12.20", type: "date", image: "/songs/9.png" },
      { text: "02.12.20", type: "date", image: "/songs/10.png" },
      { text: "02.12.20", type: "date", image: "/songs/11.png" },
    ],
  ];

  return (
    <div className={styles.container}>
      <SlideColumn data={data[0]} direction="UP1" />
      <SlideColumn data={data[1]} direction="UP2" />
      <SlideColumn data={data[2]} direction="UP3" />
    </div>
  );
};

export default Slides;
