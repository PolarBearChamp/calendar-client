import { configureStore } from '@reduxjs/toolkit'
import { calendarSlice } from '@/EntityLayer/Calendar'
import { calendarApi } from '@/SharedLayer/model/api/api'

import { loginReducer } from '@/FeatureLayer/Login/model/slice/loginSlice'

export const store = configureStore({
  preloadedState: {},
  reducer: {
    calendar: calendarSlice.reducer,
    login: loginReducer,
    [calendarApi.reducerPath]: calendarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(calendarApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
