import { FC, useEffect, useCallback } from "react";
import { Input, Select, Button } from "../index";
import { PRIORITIES, CATEGORIES, DEFAULT } from "../../constants";
import { Task } from "../../constructors";
import { Priority, Category } from "../../types";
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

  const showErrorAlert = (): void => {
    dispatch(setType("error"));
    dispatch(setMessage("Please fill in all fields"));
    dispatch(showAlert());
  };

  const addTask = useCallback((): void => {
    if (isOpenAlert) return;

    if (!taskName || priority === DEFAULT || category === DEFAULT) {
      showErrorAlert();
      return;
    }

    const newTask = new Task(taskName, priority, category);
    console.log(newTask);
  }, [isOpenAlert, taskName, priority, category]);

  const closeModal = useCallback((): void => {
    dispatch(hideModal());
  }, []);

  const setTaskName = useCallback((value: string): void => {
    dispatch(setTaskNameSlice(value));
  }, []);

  const setPriority = useCallback((value: Priority): void => {
    dispatch(setPrioritySlice(value));
  }, []);

  const setCategory = useCallback((value: Category): void => {
    dispatch(setCategorySlice(value));
  }, []);

  useEffect(() => {
    dispatch(setDefaultState());
  }, []);

  return (
    <div
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
          value={priority}
          options={PRIORITIES}
          onChange={setPriority}
          placeholder="Select a priority"
        />
      </div>
      <div className="flex flex-col w-full mb-3">
        <Select
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
    </div>
  );
};
