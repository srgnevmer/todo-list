export type Theme = "light" | "dark";
export type AlertType = "successe" | "error";
export type Priority = "low" | "medium" | "high";
export type Category = "chore" | "learning" | "mind care" | "body care";
export type IconId =
  | "left-arrow"
  | "right-arrow"
  | "home"
  | "bookmark"
  | "bookmark-slash"
  | "sun"
  | "moon"
  | "github"
  | "check"
  | "exclamation"
  | "ellipsis"
  | "trash";

export interface Link {
  to: string;
  name: string;
  iconName: string;
}

export interface ThemeContext {
  setThemeMode: () => void;
}

export interface ModalContext {
  content: JSX.Element | null;
  addContentToModal: (content: JSX.Element) => void;
}

export interface AlertState {
  isActive: boolean;
  type: AlertType | null;
  message: string;
}

export interface Task {
  id: string;
  name: string;
  priority: Priority;
  category: Category;
  isCompleted: boolean;
  date: number;
}
