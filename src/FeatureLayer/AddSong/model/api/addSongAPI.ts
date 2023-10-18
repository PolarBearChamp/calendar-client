import { calendarApi } from '@/SharedLayer/model/api/api'

const addSongAPI = calendarApi.injectEndpoints({
  endpoints: (build) => ({
    addSong: build.mutation({
      query: (data) => ({
        url: '/posts/add',
        method: 'POST',
        body: data,
      }),
    }),
    updateSong: build.mutation({
      query: ({ data, id }) => ({
        url: `/posts/update/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    getSongById: build.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'GET',
      }),
    }),
  }),

  overrideExisting: true,
})

export const {
  useAddSongMutation,
  useUpdateSongMutation,
  useGetSongByIdQuery,
} = addSongAPI
