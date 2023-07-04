export enum DayStatus {
  "active",
  "default",
}

export enum NavigationAction {
  "Next",
  "Previous",
}

export enum DayControlAction {
  "EDIT",
  "SHARE",
  "DELETE",
}

export interface ModalPosition {
  x: number;
  y: number;
}

export interface ISlideItemData {
  text: string;
  type: SlideItemType;
  image: string;
}

export interface IDateContext {
  month: string;
  year: string;
}

export interface ILoginData {
  email: string
  password: string
}

export type SlideItemType = "date" | "text";
export type InputType = "text" | "number" | "email" | "password";
