import { createSlice } from '@reduxjs/toolkit'

import { format } from 'date-fns'
import { Calendar } from '../../model/types/calendar'

const today = new Date()

const currentMonth = format(today, 'MMMM')
const currentYear = format(today, 'yyyy')

const initialState: Calendar = {
  date: {
    month: currentMonth,
    year: currentYear,
  },
  data: [],
}

export const calendarSlice = createSlice({
  name: 'calendarSlice',
  initialState,
  reducers: {},
  extraReducers: {},
})

export const { actions: calendarActions } = calendarSlice
export const { reducer: calendarReducer } = calendarSlice
