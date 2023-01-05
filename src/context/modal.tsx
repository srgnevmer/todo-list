import { FC, createContext, useState } from "react";
import { ModalContext as IModalContext } from "../types";

export const ModalContext = createContext<Partial<IModalContext>>({});

interface ModalProviderProps {
  children: JSX.Element;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [content, setContent] = useState<JSX.Element | null>(null);

  const openModal = (): void => setIsOpenModal(true);
  const closeModal = (): void => setIsOpenModal(false);
  const setContentToModal = (value: JSX.Element): void => setContent(value);

  return (
    <ModalContext.Provider
      value={{ isOpenModal, content, openModal, closeModal, setContentToModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
