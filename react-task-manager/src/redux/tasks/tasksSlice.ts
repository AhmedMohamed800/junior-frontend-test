import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../../types/task";
import { getTasksFromLocalStorage } from "../../utils/storage";
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
    },
    editTask: (state, action: PayloadAction<Task>) => {
      if (!isPriority(action.payload.priority)) {
        return;
      }

      const index = state.findIndex((task) => task.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex((task) => task.id === action.payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
