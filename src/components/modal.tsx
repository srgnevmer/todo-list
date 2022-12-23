import { FC, MouseEvent, KeyboardEvent, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ESCAPE } from "../constants";
import { hideModal } from "../redux/slices/modal-slice";
import { useAppDispatch } from "../redux/typed-hooks";

const rootPortal: HTMLElement = document.getElementById("portal")!;

interface ModalProps {
  isOpen: boolean;
  children: JSX.Element;
}

export const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const closeModal = (): void => {
    dispatch(hideModal());
  };

  const closeModalWithEsc = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.code === ESCAPE) closeModal();
  };

  const closeModalWithMouseClick = (
    event: MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) closeModal();
  };

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  if (isOpen) {
    return createPortal(
      <div
        ref={ref}
        tabIndex={0}
        onKeyDown={closeModalWithEsc}
        onClick={closeModalWithMouseClick}
        className="absolute inset-0 flex justify-center 
        items-center min-h-screen bg-black/90"
      >
        {children}
      </div>,
      rootPortal
    );
  }

  return null;
};
