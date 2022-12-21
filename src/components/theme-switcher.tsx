import { FC } from "react";
import { Theme } from "../types";
import { SvgSelector } from "./index";
import { useAppSelector } from "../redux/typed-hooks";

export const ThemeSwitcher: FC = () => {
  const selectedTheme = useAppSelector<Theme>((state) => state.theme.mode);

  return (
    <div
      className="flex justify-center items-center w-12 h-12
      rounded-xl bg-blue-700 group-hover:bg-blue-600 
      transition-colors duration-100"
    >
      {selectedTheme === "light" ? (
        <SvgSelector id="moon" />
      ) : (
        <SvgSelector id="sun" />
      )}
    </div>
  );
};
