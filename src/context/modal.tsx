import { FC, createContext, useState } from "react";
import { ModalContext as IModalContext } from "../types";

export const ModalContext = createContext<IModalContext | null>(null);

interface ModalProviderProps {
  children: JSX.Element;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [content, setContent] = useState<JSX.Element | null>(null);

  const addContentToModal = (content: JSX.Element): void => {
    setContent(content);
  };

  return (
    <ModalContext.Provider value={{ content, addContentToModal }}>
      {children}
    </ModalContext.Provider>
  );
};
