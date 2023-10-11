import { calendarApi } from './api'

const loginAPI = calendarApi.injectEndpoints({
  endpoints: (build) => ({
    loginByEmail: build.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useLoginByEmailMutation } = loginAPI
