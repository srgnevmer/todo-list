import { FC, MouseEvent, KeyboardEvent, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { animated, config, useTransition } from "@react-spring/web";
import { ESCAPE } from "../constants";
import { hideModal } from "../redux/slices/modal-slice";
import { useAppDispatch } from "../redux/typed-hooks";

const rootModal: HTMLElement = document.getElementById("modal")!;

interface ModalProps {
  isOpen: boolean;
  children: JSX.Element;
}

export const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const modalTransition = useTransition(isOpen, {
    config: config.stiff,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const childTransition = useTransition(true, {
    from: { transform: "translateY:(-4rem)" },
    to: { transform: "translateY:(0rem)" },
  });

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

  return createPortal(
    modalTransition(
      (style, item) =>
        item && (
          <animated.div
            ref={ref}
            tabIndex={0}
            style={style}
            onKeyDown={closeModalWithEsc}
            onClick={closeModalWithMouseClick}
            className="absolute inset-0 flex justify-center 
            items-center min-h-screen bg-black/90"
          >
            {children}
          </animated.div>
        )
    ),
    rootModal
  );
};
