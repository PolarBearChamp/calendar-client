import { calendarApi } from '@/SharedLayer/model/api/api'

const profileAPI = calendarApi.injectEndpoints({
  endpoints: (build) => ({
    fetchProfileData: build.query({
      query: (profileId) => ({
        url: `/profile/${profileId}`,
        method: 'GET',
      }),
    }),
    updateProfileData: build.mutation({
      query: ({ profileId, newData }) => ({
        url: `/profile/${profileId}`,
        method: 'PUT',
        body: newData,
      }),
    }),
  }),

  overrideExisting: true,
})

export const { useFetchProfileDataQuery, useUpdateProfileDataMutation } =
  profileAPI
