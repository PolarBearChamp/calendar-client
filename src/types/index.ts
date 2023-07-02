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
export type InputType = "text" | "number" | "email" | "password";
