import { calendarApi } from '@/SharedLayer/model/api/api'

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
