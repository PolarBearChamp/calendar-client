export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const enum DAY_STATUS {
  ACTIVE = 'active',
  DEFAULT = 'default',
}

export const enum NAVIGATION_ACTION {
  NEXT = 'next',
  PREV = 'previous',
}

export const enum DAY_CONTROL_ACTION {
  EDIT = 'edit',
  SHARE = 'share',
  DELETE = 'delete',
}

export const enum SLIDE_MOVE_DIRECTION {
  UP1 = 'up1',
  UP2 = 'up2',
  UP3 = 'up3',
}

export interface ISlideItemData {
  text: string
  type: SlideItemType
  image: string
}

export interface IDateContext {
  month: string
  year: string
}

export interface ICalendarItem {
  day: number
  data?: Partial<ISongData>
}

export interface ISongData {
  postId: string
  link: string
  artist: string
  name: string
  cover: string
}

export interface ILoginData {
  email: string
  password: string
}

export interface ISignupData {
  userName: string
  email: string
  password: string
}

export interface IFriendData {
  id: number
  username: string
  status?: string
  image?: string
  url: string
}

export type SlideItemType = 'date' | 'text'
