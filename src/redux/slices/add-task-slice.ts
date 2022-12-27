import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Priority, Category } from "../../types";

interface AddTaskState {
  taskName: string;
  priority: Priority | "default";
  category: Category | "default";
}

const initialState: AddTaskState = {
  taskName: "",
  priority: "default",
  category: "default",
};

const addTaskSlice = createSlice({
  name: "add-task",
  initialState,
  reducers: {
    setTaskName: (state: AddTaskState, action: PayloadAction<string>) => {
      state.taskName = action.payload;
    },
    setPriority: (state: AddTaskState, action: PayloadAction<Priority>) => {
      state.priority = action.payload;
    },
    setCategory: (state: AddTaskState, action: PayloadAction<Category>) => {
      state.category = action.payload;
    },
    setDefaultState: (state: AddTaskState) => {
      state.taskName = "";
      state.priority = "default";
      state.category = "default";
    },
  },
});

export const { setTaskName, setPriority, setCategory, setDefaultState } =
  addTaskSlice.actions;
export default addTaskSlice.reducer;
