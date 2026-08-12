import CreateOrEditTask from "./components/CreateOrEditTask";
import gsap from "gsap";
import { useAside } from "./hooks/useAside";
import Button from "./components/General/Button";
import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { PlusIcon } from "./components/General/Icons";
import type { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import TaskComponent from "./components/Task";
import type { Task } from "./types/task";
import type { Filter } from "./types/filter";
import FilterComponent from "./components/Filter";
gsap.registerPlugin(useGSAP);
import { useDispatch } from "react-redux";
import { replaceTasks } from "./redux/tasks/tasksSlice";

function App() {
  const dispatch = useDispatch();

  const { asideElement, toggleAside } = useAside();
  const [filtersState, setFiltersState] = useState<Filter>({
    query: "",
    status: "All",
    priority: "All",
  });
  const tasks = useSelector((state: RootState) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    const matchesQuery = task.title
      .toLowerCase()
      .includes(filtersState.query.toLowerCase());

    const matchesPriority =
      filtersState.priority === "All" ||
      task.priority === filtersState.priority;

    const matchesStatus =
      filtersState.status === "All" ||
      (filtersState.status === "Completed" && task.completed) ||
      (filtersState.status === "In Progress" && !task.completed);

    return matchesQuery && matchesPriority && matchesStatus;
  });

  const [editId, setEditId] = useState("");

  // Make Tasks change across different browser taps
  useEffect(() => {
    function storageChange(e: StorageEvent) {
      if (e.key !== "tasks" || !e.newValue) return;

      const newValue = JSON.parse(e.newValue);

      dispatch(replaceTasks(newValue));
    }

    window.addEventListener("storage", storageChange);

    return () => {
      window.removeEventListener("storage", storageChange);
    };
  });

  return (
    <>
      <header className="flex items-center justify-between py-4 border-b border-b-border">
        <h1 className="text-2xl text-white font-semibold">Task Manager</h1>

        <Button
          text="Create New Task"
          style="blue"
          icon={<PlusIcon />}
          onClick={() => {
            toggleAside();
            setEditId("");
          }}
        />
      </header>

      <CreateOrEditTask
        ref={asideElement}
        toggleAside={() => {
          toggleAside();
          setEditId("");
        }}
        editId={editId}
      />

      <FilterComponent
        filtersState={filtersState}
        setFiltersState={setFiltersState}
      />

      <main
        className="grid gap-4 mt-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {filteredTasks.map((task: Task) => {
          return (
            <TaskComponent
              key={task.id}
              task={task}
              setEditId={setEditId}
              toggleAside={toggleAside}
            />
          );
        })}

        {filteredTasks.length === 0 && (
          <div className="text-3xl text-white text-center mt-16">
            There are no Tasks
          </div>
        )}
      </main>
    </>
  );
}

export default App;
