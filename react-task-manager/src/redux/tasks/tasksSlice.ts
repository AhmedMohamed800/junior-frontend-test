import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../../types/task";
import {
  getTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "../../utils/storage";
import { isPriority } from "../../utils/validator";

const initialState: Task[] = getTasksFromLocalStorage();

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      if (!isPriority(action.payload.priority)) {
        return;
      }

      state.push(action.payload);
      saveTasksToLocalStorage(state);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      if (!isPriority(action.payload.priority)) {
        return;
      }

      const index = state.findIndex((task) => task.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
        saveTasksToLocalStorage(state);
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((task) => task.id === action.payload);

      if (index !== -1) {
        state.splice(index, 1);
        saveTasksToLocalStorage(state);
      }
    },
    replaceTasks: (_, action: PayloadAction<Task[]>) => {
      return action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, replaceTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
