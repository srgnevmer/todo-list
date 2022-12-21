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
  | "github";

export type Theme = "light" | "dark";

export interface ThemeContext {
  setThemeMode: () => void;
}
