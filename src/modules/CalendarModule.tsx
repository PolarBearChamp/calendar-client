"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Header from "@/src/components/Header/Header";
import Calendar from "@/src/components/Calendar/Calendar";
import Navigation from "@/src/components/Navigation/Navigation";
import UserControls from "@/src/components/UserControls/UserControls";
import CalendarHeader from "@/src/components/Calendar/CalendarHeader/CalendarHeader";

import styles from "./CalendarModule.module.scss";

const CalendarModule = () => {
  const today = new Date();
  const currentMonth = format(today, "MMMM");
  const currentYear = format(today, "yyyy");

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    setMonth(currentMonth);
    setYear(currentYear);
  }, [currentMonth, currentYear]);

  return (
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
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default CalendarModule;
