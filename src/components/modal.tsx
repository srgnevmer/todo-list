import { FC } from "react";
import { createPortal } from "react-dom";

const rootPortal: HTMLElement = document.getElementById("portal")!;

interface ModalProps {
  isOpen: boolean;
  children: JSX.Element;
}

export const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  if (isOpen) {
    return createPortal(
      <div
        className="absolute inset-0 flex justify-center items-center
        min-h-screen bg-black/90"
      >
        {children}
      </div>,
      rootPortal
    );
  }

  return null;
};
