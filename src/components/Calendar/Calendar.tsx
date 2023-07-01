import React from "react";
import Day from "./Day/Day";

import styles from "./Calendar.module.scss";

const Calendar = () => {
  const data = [
    { day: 1, scene: "/songs/1.webp" },
    { day: 2, scene: "/songs/2.webp" },
    { day: 3 },
    { day: 4 },
    { day: 5 },
    { day: 6, scene: "/songs/1.webp" },
    { day: 7, scene: "/songs/2.webp" },
    { day: 8 },
    { day: 9, scene: "/songs/1.webp" },
    { day: 10, scene: "/songs/1.webp" },
    { day: 11 },
    { day: 12 },
    { day: 13 },
    { day: 14 },
    { day: 15 },
    { day: 16 },
    { day: 17, scene: "/songs/2.webp" },
    { day: 18, scene: "/songs/2.webp" },
    { day: 19 },
    { day: 20 },
    { day: 21 },
    { day: 22 },
    { day: 23 },
    { day: 24 },
    { day: 25, scene: "/songs/1.webp" },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29 },
    { day: 30, scene: "/songs/2.webp" },
  ];

  return (
    <div className={styles.container}>
      {data.map((el, i) => {
        return <Day key={i} day={el.day} scene={el?.scene} />;
      })}
    </div>
  );
};

export default Calendar;
