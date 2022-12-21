import { FC, createContext } from "react";
import { Theme, ThemeContext as IThemeContext } from "../types";
import { setTheme } from "../redux/slices/theme-slice";
import { useAppDispatch, useAppSelector } from "../redux/typed-hooks";

export const ThemeContext = createContext<IThemeContext | null>(null);

interface ThemeProviderProps {
  children: JSX.Element;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const selectedTheme = useAppSelector<Theme>((state) => state.theme.mode);

  const setThemeMode = (): void => {
    const target: HTMLElement = document.getElementById("container")!;

    if (selectedTheme === "light") {
      dispatch(setTheme("dark"));
      target.classList.add("dark");
    } else {
      dispatch(setTheme("light"));
      target.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
