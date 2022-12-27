import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { SvgSelector, ThemeSwitcher } from "../components";
import { LINKS, REPOSITORY_LINK } from "../constants";
import { Link as ILink, IconId, ThemeContext as IThemeContext } from "../types";
import { getUniqueId, capitalizedFirstLetter } from "../utils";
import { showMenu, closeMenu } from "../redux/slices/menu-slice";
import { useAppDispatch, useAppSelector } from "../redux/typed-hooks";
import { ThemeContext } from "../context";

export const Menu: FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector<boolean>((state) => state.menu.isActive);
  const { setThemeMode } = useContext<IThemeContext | null>(ThemeContext)!;

  const showOrCloseMenu = (): void => {
    if (isOpen) {
      dispatch(closeMenu());
    } else {
      dispatch(showMenu());
    }
  };

  return (
    <div
      className={`${!isOpen ? "w-20" : "w-60"} 
      flex flex-col bg-slate-200 transition-all duration-100 
      border-r border-slate-400 dark:bg-slate-800 select-none`}
    >
      <div
        onClick={showOrCloseMenu}
        className="flex justify-center items-center h-14 bg-blue-700 cursor-pointer 
        hover:bg-blue-600 transition-colors duration-100"
      >
        {!isOpen ? (
          <SvgSelector id="left-arrow" />
        ) : (
          <SvgSelector id="right-arrow" />
        )}
      </div>
      <div className="flex flex-col justify-between grow">
        <ul className="flex flex-col justify-around items-center h-48">
          {LINKS.map((link: ILink) => (
            <li key={getUniqueId()} className={`${isOpen && "w-full"} group`}>
              <Link to={link.to} className="flex justify-center">
                <div
                  className="flex justify-center items-center w-12 h-12 rounded-xl
                  bg-blue-700 group-hover:bg-blue-600 transition-colors duration-100"
                >
                  <SvgSelector id={link.iconName as IconId} />
                </div>
                {isOpen && (
                  <span
                    className="flex justify-start items-center w-32 ml-2
                  text-2xl font-bold text-neutral-900 dark:text-white 
                  group-hover:text-blue-600"
                  >
                    {capitalizedFirstLetter(link.name)}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col justify-around items-center h-36">
          <li
            key={getUniqueId()}
            onClick={setThemeMode}
            className={`${
              isOpen && "w-full"
            } flex justify-center group cursor-pointer`}
          >
            <ThemeSwitcher />
            {isOpen && (
              <span
                className="flex justify-start items-center w-32 ml-2
                text-2xl font-bold text-neutral-900 dark:text-white 
                group-hover:text-blue-600"
              >
                Theme
              </span>
            )}
          </li>
          <li
            key={getUniqueId()}
            className={`${
              isOpen && "w-full"
            } flex justify-center group cursor-pointer`}
          >
            <a
              href={REPOSITORY_LINK}
              className="flex justify-center items-center w-full"
            >
              <div
                className="flex justify-center items-center w-12 h-12 rounded-xl
                bg-blue-700 group-hover:bg-blue-600 transition-colors duration-100"
              >
                <SvgSelector id="github" />
              </div>
              {isOpen && (
                <span
                  className="flex justify-start items-center w-32 ml-2
                text-2xl font-bold text-neutral-900 dark:text-white 
                group-hover:text-blue-600"
                >
                  GitHub
                </span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
