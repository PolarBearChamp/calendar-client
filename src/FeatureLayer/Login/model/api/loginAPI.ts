import { calendarApi } from '@/SharedLayer/model/api/api'

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
