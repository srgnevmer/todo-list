export type Status = "active" | "completed";

export type Priority = "low" | "medium" | "high";

export type Category = "chore" | "learning" | "mind care" | "body care";

export interface Task {
  id: string;
  name: string;
  date: number;
  status: Status;
  priority: Priority;
  category: Category;
}

export interface ModalContext {
  isOpenModal: boolean;
  content: JSX.Element | null;
  openModal: () => void;
  closeModal: () => void;
  setContentToModal: (value: JSX.Element) => void;
}
