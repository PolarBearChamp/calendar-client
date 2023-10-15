import { configureStore } from '@reduxjs/toolkit'
import { calendarSlice } from '@/EntityLayer/Calendar'
import { calendarApi } from '@/SharedLayer/model/api/api'

export const store = configureStore({
  preloadedState: {},
  reducer: {
    calendar: calendarSlice.reducer,
    [calendarApi.reducerPath]: calendarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(calendarApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
