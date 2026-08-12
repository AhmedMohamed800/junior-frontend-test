import type { Task } from "../types/task";
import React, { useRef } from "react";
import Priority from "./Priority";
import { DeleteIcon, EditIcon } from "./General/Icons";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasks/tasksSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface TaskProps {
  task: Task;
  setEditId: React.Dispatch<React.SetStateAction<string>>;
  toggleAside: () => void;
}

gsap.registerPlugin(useGSAP);

export default function Task({ task, setEditId, toggleAside }: TaskProps) {
  const dispatch = useDispatch();
  const taskElement = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP({ scope: taskElement });

  const priorityBorder = {
    Low: "border-t-low-border",
    Medium: "border-t-medium-border",
    High: "border-t-high-border",
  }[task.priority];

  const deleteTaskAnimation = contextSafe(() => {
    const confirmDelete = confirm(
      `Do you want to delete this task\n${task.id}`,
    );
    if (confirmDelete) {
      gsap.to(".task", {
        opacity: 0,
        y: -10,
        duration: 0.3,
        onComplete: () => {
          dispatch(deleteTask(task.id));
        },
      });
    }
  });

  return (
    <article ref={taskElement}>
      <div
        className={`task flex flex-col gap-4 border-t-4  h-full ${priorityBorder} bg-secondary p-4 border-border border`}
      >
        <div className="flex items-center justify-between">
          <Priority status={task.priority} />
          <p className="text-white text-sm">
            {task.completed ? "Completed" : "In Progress"}
          </p>
        </div>
        <p className=" text-[18px] text-white font-medium border-b pb-4 border-border">
          {task.title}
        </p>

        <div className="flex self-end gap-3">
          <button
            className=" cursor-pointer"
            onClick={() => {
              setEditId(task.id);
              toggleAside();
            }}
          >
            <EditIcon width="16" height="16" />
          </button>
          <button className=" cursor-pointer" onClick={deleteTaskAnimation}>
            <DeleteIcon width="16" height="16" />
          </button>
        </div>
      </div>
    </article>
  );
}
