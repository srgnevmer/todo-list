import { FC } from "react";
import { Button } from "./index";

interface MainProps {
  children: JSX.Element;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center grow">
      <div
        className="w-full max-w-3xl xl:max-w-5xl h-[700px] flex
      bg-slate-200 dark:bg-slate-800 rounded-xl border border-slate-400"
      >
        {children}
      </div>
    </div>
  );
};
