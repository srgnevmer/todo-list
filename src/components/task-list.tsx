import { FC, useEffect, useState } from "react";
import { useTransition } from "@react-spring/web";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
import { Task } from "../types";
import { TaskListItem } from "./index";
import { TASKS, LIST } from "../constants";

export const TaskList: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const transitions = useTransition(tasks, {
    keys: (item: Task) => item.id,
    from: { opacity: 0, transform: "translateX(-40px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(-40px)" },
  });

  useEffect(() => {
    const unsub = onSnapshot(doc(db, TASKS, LIST), (doc) => {
      setTasks(doc.data()?.list || []);
    });

    return () => unsub();
  }, []);

  return (
    <ul className="flex flex-col items-center grow p-4 overflow-y-auto">
      {transitions(
        (style, item) =>
          item && (
            <TaskListItem
              id={item.id}
              list={tasks}
              style={style}
              name={item.name}
              date={item.date}
              priority={item.priority}
              category={item.category}
              isCompleted={item.isCompleted}
            />
          )
      )}
    </ul>
  );
};
