import { FC, useEffect, useCallback } from "react";
import { animated, useSpring } from "@react-spring/web";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase.config";
import { getUniqueId } from "../../utils";
import { Priority, Category, Task } from "../../types";
import { Input, Select, Button } from "../index";
import { PRIORITIES, CATEGORIES, DEFAULT, TASKS, LIST } from "../../constants";
import { hideModal } from "../../redux/slices/modal-slice";
import { useAppDispatch, useAppSelector } from "../../redux/typed-hooks";
import {
  setDefaultState,
  setTaskName as setTaskNameSlice,
  setPriority as setPrioritySlice,
  setCategory as setCategorySlice,
} from "../../redux/slices/add-task-slice";
import { showAlert, setType, setMessage } from "../../redux/slices/alert-slice";

export const AddTask: FC = () => {
  const dispatch = useAppDispatch();
  const taskName = useAppSelector<string>((state) => state.addTask.taskName);
  const priority = useAppSelector<Priority | "default">(
    (state) => state.addTask.priority
  );
  const category = useAppSelector<Category | "default">(
    (state) => state.addTask.category
  );
  const isOpenAlert = useAppSelector<boolean>((state) => state.alert.isActive);

  const style = useSpring({
    from: { opacity: 0, transform: "translateY(-80px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  const closeModal = useCallback((): void => {
    dispatch(hideModal());
  }, []);

  const setTaskName = useCallback((value: string): void => {
    dispatch(setTaskNameSlice(value));
  }, []);

  const setPriority = useCallback(function <T>(value: T): void {
    dispatch(setPrioritySlice(value as Priority));
  }, []);

  const setCategory = useCallback(function <T>(value: T): void {
    dispatch(setCategorySlice(value as Category));
  }, []);

  const showNotification = (): void => {
    dispatch(setType("error"));
    dispatch(setMessage("Please fill in all fields"));
    dispatch(showAlert());
  };

  const addTask = async (): Promise<void> => {
    if (isOpenAlert) return;

    if (!taskName || priority === DEFAULT || category === DEFAULT) {
      showNotification();
      return;
    }

    const docRef = doc(db, TASKS, LIST);
    const docSnap = await getDoc(docRef);

    const task: Task = {
      id: getUniqueId(),
      name: taskName,
      priority,
      category,
      isCompleted: false,
      date: new Date().getTime(),
    };

    if (docSnap.exists()) {
      await updateDoc(docRef, {
        list: arrayUnion(task),
      });
    } else {
      setDoc(docRef, { list: [task] });
    }

    closeModal();
  };

  useEffect(() => {
    dispatch(setDefaultState());
  }, []);

  return (
    <animated.div
      style={style}
      className="w-full max-w-lg flex flex-col rounded-lg
    bg-slate-200 dark:bg-slate-800 px-5 py-6"
    >
      <div className="flex flex-col w-full mb-3">
        <Input
          value={taskName}
          onChange={setTaskName}
          placeholder="Task name"
        />
      </div>
      <div className="flex flex-col w-full mb-3">
        <Select
          type="priority"
          value={priority}
          options={PRIORITIES}
          onChange={setPriority}
          placeholder="Select a priority"
        />
      </div>
      <div className="flex flex-col w-full mb-3">
        <Select
          type="category"
          value={category}
          options={CATEGORIES}
          onChange={setCategory}
          placeholder="Select a category"
        />
      </div>
      <div className="flex justify-center w-full max-w-lg">
        <div className="mr-8">
          <Button
            text="Add a task"
            type="submit"
            color="btn-success"
            onClick={addTask}
          />
        </div>
        <Button text="Cancel" color="btn-error" onClick={closeModal} />
      </div>
    </animated.div>
  );
};
