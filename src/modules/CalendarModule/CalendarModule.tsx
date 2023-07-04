"use client";
import React, { createContext, useEffect, useState } from "react";
import { addMonths, format, subMonths } from "date-fns";
import Header from "@/src/components/Header/Header";
import Calendar from "@/src/components/Calendar/Calendar";
import Navigation from "@/src/components/Navigation/Navigation";
import UserControls from "@/src/components/UserControls/UserControls";
import CalendarHeader from "@/src/components/Calendar/CalendarHeader/CalendarHeader";

import styles from "./CalendarModule.module.scss";
import { IDateContext } from "@/src/types";

const CalendarModule = () => {
  const today = new Date();

  const currentMonth = format(today, "MMMM");
  const currentYear = format(today, "yyyy");

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const DateContext = createContext<IDateContext>({ month: month, year: year });

  useEffect(() => {
    setMonth(currentMonth);
    setYear(currentYear);
  }, [currentMonth, currentYear]);

  const nextMonthHandle = () => {
    format(addMonths(new Date(), 1), "MMMM");
    console.log("click next");
  };

  const prevMonthHandle = () => {
    format(subMonths(new Date(), 1), "MMMM");
    console.log("click prev");
  };
  console.log(month, year);

  return (
    <DateContext.Provider value={{ month: month, year: year }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header year={year} month={month} />
        </div>
        <div className={styles.content}>
          <div className={styles.controls}>
            <UserControls />
          </div>
          <div className={styles.calendarHeader}>
            <CalendarHeader />
          </div>
          <div className={styles.calendar}>
            <Calendar />
          </div>
          <div className={styles.navigation}>
            <Navigation
              nextMonth={nextMonthHandle}
              prevMonth={prevMonthHandle}
            />
          </div>
        </div>
        <div id="popup-root"></div>
      </div>
      {/*       // Прикол с картинкой на фоне
      <div className={styles.back}></div> */}
    </DateContext.Provider>
  );
};

export default CalendarModule;
