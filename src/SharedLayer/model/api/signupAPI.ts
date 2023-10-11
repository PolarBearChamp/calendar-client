import { calendarApi } from './api'

const signupAPI = calendarApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useSignupMutation } = signupAPI
