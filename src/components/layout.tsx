import { FC, useState, useEffect } from "react";
import { MIN_WINDOW_WIDTH } from "../constants";
import { getWidthWindow } from "../utils";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(getWidthWindow());

  useEffect(() => {
    const handleWindowResize = (): void => {
      setWindowWidth(getWidthWindow());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowWidth < MIN_WINDOW_WIDTH) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-100 dark:bg-slate-900">
        <span className="text-center text-3xl font-bold text-neutral-900 dark:text-white">
          Unfortunately, this window width is not supported
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900">
        {children}
      </div>
    );
  }
};
