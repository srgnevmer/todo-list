import { FC } from "react";
import { animated, SpringValue } from "@react-spring/web";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../firebase.config";
import { Task } from "../types";
import { TASKS, LIST } from "../constants";
import { Badge, SvgSelector } from "./index";
import { formatDate, capitalizedFirstLetter } from "../utils";
import { useAppDispatch } from "../redux/typed-hooks";
import { showAlert, setType, setMessage } from "../redux/slices/alert-slice";

interface TaskListItemProps extends Task {
  list: Task[];
  style: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
}

export const TaskListItem: FC<TaskListItemProps> = ({
  id,
  name,
  date,
  list,
  style,
  priority,
  category,
  isCompleted,
}) => {
  const dispatch = useAppDispatch();

  const showNotification = (): void => {
    dispatch(setType("successe"));
    dispatch(setMessage("The task was successfully deleted"));
    dispatch(showAlert());
  };

  const deleteTask = async () => {
    const docRef = doc(db, TASKS, LIST);
    const currentTask: Task = list.filter((task: Task) => task.id === id)[0];

    updateDoc(docRef, {
      list: arrayRemove(currentTask),
    });

    showNotification();
  };

  return (
    <animated.li
      style={style}
      className="flex w-full h-14 mb-3 rounded-md shrink-0
      select-none bg-slate-300 dark:bg-slate-700"
    >
      <div
        className={`w-3 h-full rounded-tl-md rounded-bl-md ${
          priority === "low"
            ? "bg-green-600"
            : priority === "medium"
            ? "bg-yellow-500"
            : "bg-red-600"
        }`}
      ></div>
      <div className="flex grow">
        <div className="w-full h-full flex ">
          <div className="w-60 h-full flex shrink-0">
            <div className="w-full h-full flex flex-col justify-around items-center">
              <p className="text-sm font-bold dark:text-white">
                Status: <span>{isCompleted ? "completed" : "active"}</span>
              </p>
              <p className="text-sm font-bold dark:text-white">
                {formatDate(date)}
              </p>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <Badge category={category} />
            </div>
          </div>
          <div
            className="w-full h-full flex items-center pl-6 
              text-2xl font-medium dark:text-white"
          >
            {capitalizedFirstLetter(name)}
          </div>
        </div>
        <div className="w-32 h-full shrink-0 flex justify-around items-center">
          <div
            className="flex justify-center items-center w-10 h-10 rounded-xl
            bg-blue-700 hover:bg-blue-600 transition-colors duration-100"
          >
            <SvgSelector id="ellipsis" />
          </div>
          <div
            onClick={deleteTask}
            className="flex justify-center items-center w-10 h-10 rounded-xl
            bg-blue-700 hover:bg-blue-600 transition-colors duration-100"
          >
            <SvgSelector id="trash" />
          </div>
        </div>
      </div>
    </animated.li>
  );
};
