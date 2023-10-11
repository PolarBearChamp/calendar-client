import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
  }),
  endpoints: (builder) => ({}),
})

export const {} = calendarApi
