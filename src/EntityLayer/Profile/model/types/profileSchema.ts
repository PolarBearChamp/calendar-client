export interface Profile {
  username: string
  email: string
  password: string
  birthday: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  readonly: boolean
}
