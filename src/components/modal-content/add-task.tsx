import { FC, useEffect } from "react";
import { Input, Select, Button } from "../index";
import { PRIORITIES, CATEGORIES } from "../../constants";
import { Priority, Category } from "../../types";
import { hideModal } from "../../redux/slices/modal-slice";
import { useAppDispatch, useAppSelector } from "../../redux/typed-hooks";
import {
  setDefaultState,
  setTaskName as setTaskNameSlice,
  setPriority as setPrioritySlice,
  setCategory as setCategorySlice,
} from "../../redux/slices/add-task-slice";

export const AddTask: FC = () => {
  const dispatch = useAppDispatch();
  const taskName = useAppSelector<string>((state) => state.addTask.taskName);
  const priority = useAppSelector<Priority | "default">(
    (state) => state.addTask.priority
  );
  const category = useAppSelector<Category | "default">(
    (state) => state.addTask.category
  );

  const test = () => {
    console.log({
      taskName,
      priority,
      category,
    });
  };

  const closeModal = (): void => {
    dispatch(hideModal());
  };

  const setTaskName = (value: string): void => {
    dispatch(setTaskNameSlice(value));
  };

  const setPriority = (value: Priority): void => {
    dispatch(setPrioritySlice(value));
  };

  const setCategory = (value: Category): void => {
    dispatch(setCategorySlice(value));
  };

  useEffect(() => {
    dispatch(setDefaultState());
  }, []);

  return (
    <div className="w-full max-w-lg flex flex-col rounded-lg bg-slate-200 dark:bg-slate-800 px-5 py-6">
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
            onClick={test}
          />
        </div>
        <Button text="Cancel" color="btn-error" onClick={closeModal} />
      </div>
    </div>
  );
};
