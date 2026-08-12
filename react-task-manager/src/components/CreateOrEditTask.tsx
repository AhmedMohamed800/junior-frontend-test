import type React from "react";
import { CloseIcon } from "./General/Icons";
import TaskForm from "./TaskForm";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import type { Task } from "../types/task";

interface CreateTaskProps {
  ref: React.RefObject<HTMLElement | null>;
  toggleAside: () => void;
  editId: string;
}

export default function CreateTask({
  ref,
  toggleAside,
  editId,
}: CreateTaskProps) {
  const task = useSelector((state: RootState) =>
    state.tasks.find((task: Task) => task.id === editId),
  );
  return (
    <aside
      className="absolute top-0 right-0 z-10 min-h-screen w-full md:w-[60%] lg:w-[50%] bg-secondary translate-x-full"
      ref={ref}
    >
      <div className="flex justify-between p-4 border-b border-b-border">
        <h2 className="text-xl text-white font-semibold">
          {editId.length > 0 ? "Edit Task" : "Create Task"}
        </h2>
        <button
          onClick={() => {
            toggleAside();
          }}
          className="cursor-pointer"
        >
          <CloseIcon width="20" height="20  " />
        </button>
      </div>

      {/* force taskform to remount everytime it's opened */}
      <TaskForm
        key={editId ?? "create"}
        task={editId ? task : undefined}
        toggleAside={toggleAside}
      />
    </aside>
  );
}
