export interface Link {
  to: string;
  name: string;
  iconName: string;
}

export type IconId =
  | "left-arrow"
  | "right-arrow"
  | "home"
  | "bookmark"
  | "bookmark-slash"
  | "sun"
  | "moon"
  | "github"
  | "x-mark"
  | "chevron-down";

export type Theme = "light" | "dark";

export interface ThemeContext {
  setThemeMode: () => void;
}

export interface ModalContext {
  content: JSX.Element | null;
  addContentToModal: (content: JSX.Element) => void;
}
