import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { AlertType } from "../types";
import { SvgSelector } from "./index";
import { useAppDispatch } from "../redux/typed-hooks";
import { closeAlert } from "../redux/slices/alert-slice";
import { DELAY_BEFORE_ALERT_CLOSE } from "../constants";

interface AlertProp {
  type: AlertType;
  message: string;
  isOpen: boolean;
}

const error: string = "bg-red-600";
const successe: string = "bg-green-600";
const rootAlert: HTMLElement = document.getElementById("alert")!;

export const Alert: FC<AlertProp> = ({ type, message, isOpen }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispatch(closeAlert());
      }, DELAY_BEFORE_ALERT_CLOSE);
    }
  }, [isOpen]);

  if (isOpen) {
    return createPortal(
      <div
        className={`flex absolute top-2 right-2 p-2 rounded-lg
          ${type === "successe" ? successe : error}`}
      >
        <SvgSelector id={type === "successe" ? "check" : "exclamation"} />
        <span
          className="text-white text-xl font-semibold
            flex justify-center items-center"
        >
          {message}
        </span>
      </div>,
      rootAlert
    );
  }

  return null;
};
