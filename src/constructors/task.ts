import { getUniqueId } from "../utils";
import { Priority, Category } from "../types";

export class Task {
  id: string;
  taskName: string;
  priority: Priority;
  category: Category;

  constructor(taskName: string, priority: Priority, category: Category) {
    this.id = getUniqueId();
    this.taskName = taskName;
    this.priority = priority;
    this.category = category;
  }
}
