import type { Priority } from "../types/task";

const priorities: Priority[] = ["High", "Medium", "Low"];

function isPriority(value: string): value is Priority {
  return priorities.includes(value as Priority);
}

export { isPriority };
