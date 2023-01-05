export type Priority = "low" | "medium" | "high";

export type Category = "chore" | "learning" | "mind care" | "body care";

export interface Task {
  id: string;
  name: string;
  date: number;
  isActive: boolean;
  priority: Priority;
  category: Category;
}
