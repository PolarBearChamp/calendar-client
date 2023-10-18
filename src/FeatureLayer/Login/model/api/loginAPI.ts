import { calendarApi } from '@/SharedLayer/model/api/api'

const loginAPI = calendarApi.injectEndpoints({
  endpoints: (build) => ({
    loginByEmail: build.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse(apiResponse, meta) {
        return {
          apiResponse,
          cookie: String(meta?.response?.headers.get('Set-Cookie')),
        }
      },
    }),
  }),

  overrideExisting: true,
})

export const { useLoginByEmailMutation } = loginAPI
