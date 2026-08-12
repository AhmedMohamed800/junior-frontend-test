import type React from "react";
import { CloseIcon } from "./General/Icons";

interface CreateTaskProps {
  ref: React.RefObject<HTMLElement | null>;
  toggleAside: () => void;
}

export default function CreateTask({ ref, toggleAside }: CreateTaskProps) {
  return (
    <aside
      className="absolute top-0 right-0 min-h-screen w-full md:w-[60%] lg:w-[50%] bg-secondary translate-x-full"
      ref={ref}
    >
      <div className="flex justify-between p-4 border-b border-b-border">
        <h2 className="text-xl text-white font-semibold">Create Task</h2>
        <button
          onClick={() => {
            toggleAside();
          }}
          className="cursor-pointer"
        >
          <CloseIcon width="20" height="20  " />
        </button>
      </div>
    </aside>
  );
}
