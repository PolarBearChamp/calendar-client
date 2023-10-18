export interface AddSongSchema {
  link: string
  description?: string
  tags?: string[]
}

export interface UpdateSongSchema extends AddSongSchema {
  id?: string
  title?: string
  artist?: string
  userId?: string
  date?: string
}
