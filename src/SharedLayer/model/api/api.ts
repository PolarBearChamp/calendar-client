import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
  }),
  endpoints: (builder) => ({
    getMonthData: builder.query({
      query: () => '/songs',
    }),
    loginByEmail: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginByEmailMutation } = calendarApi
