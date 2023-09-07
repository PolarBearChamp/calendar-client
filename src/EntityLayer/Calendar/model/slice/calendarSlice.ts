import { createSlice } from '@reduxjs/toolkit'

import { addMonths, format, subMonths } from 'date-fns'

const today = new Date()

const currentMonth = format(today, 'MMMM')
const currentYear = format(today, 'yyyy')

interface CalendarState {
  month: string
  year: string
}

// Define the initial state using that type
const initialState: CalendarState = {
  month: currentMonth,
  year: currentYear,
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    nextMonth: (state) => {
      state.month = format(addMonths(new Date(), 1), 'MMMM')
    },
    prevMonth: (state) => {
      state.month = format(subMonths(new Date(), 1), 'MMMM')
    },
  },
})

export const { nextMonth, prevMonth } = calendarSlice.actions

export default calendarSlice.reducer
