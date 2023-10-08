export interface Calendar {
  date: CalendarDate
  data: CalendarDay[]
}

export interface CalendarDate {
  month: string
  year: string
}

export interface CalendarDay {
  date: string
  song?: Song
}

export interface Song {
  id: string
  artistId: string
  artistName: string
  songId: string
  songName: string
  image?: string
  link: string
  genres?: string[]
  tags?: string[]
  description?: string
}
