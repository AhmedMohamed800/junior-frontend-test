import type { Task } from "../types/task";

function getTasksFromLocalStorage(): Task[] {
  try {
    const tasks = localStorage.getItem("tasks");

    if (tasks) {
      return JSON.parse(tasks);
    }

    return [];
  } catch {
    localStorage.removeItem("tasks");
    return [];
  }
}

function saveTasksToLocalStorage(tasks: Task[]): boolean {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return true;
  } catch {
    return false;
  }
}

export { getTasksFromLocalStorage, saveTasksToLocalStorage };
