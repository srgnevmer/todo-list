import { Task, Priority, Status, SortType } from "../types";

const statusList: Status[] = ["active", "completed"];
const priorityList: Priority[] = ["low", "medium", "high"];

export const sortTasks = (sortType: SortType, list: Task[]): Task[] => {
  const sortedList: Task[] = [];

  if (sortType === "high") {
    for (let index: number = 2; index >= 0; index -= 1) {
      sortedList.push(
        ...list.filter((task: Task) => task.priority === priorityList[index])
      );
    }
    return sortedList;
  }

  if (sortType === "low") {
    for (let index: number = 0; index < 3; index += 1) {
      sortedList.push(
        ...list.filter((task: Task) => task.priority === priorityList[index])
      );
    }
    return sortedList;
  }

  if (sortType === "active") {
    for (let index: number = 0; index < 2; index += 1) {
      sortedList.push(
        ...list.filter((task: Task) => task.status === statusList[index])
      );
    }
    return sortedList;
  }

  if (sortType === "completed") {
    for (let index: number = 1; index >= 0; index -= 1) {
      sortedList.push(
        ...list.filter((task: Task) => task.status === statusList[index])
      );
    }
    return sortedList;
  }

  return list;
};
