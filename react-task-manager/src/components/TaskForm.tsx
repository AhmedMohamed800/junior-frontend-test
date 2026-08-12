import type { Task } from "../types/task";
import { useState, useReducer } from "react";
import Select from "./Form/Select";
import Input from "./Form/Input";
import { useDispatch } from "react-redux";
import { editTask, addTask } from "../redux/tasks/tasksSlice";
import { generateUUID } from "../utils/uuid";
import Button from "./General/Button";
import { SaveIcon } from "./General/Icons";

interface TaskFormProps {
  task?: Task;
  toggleAside: () => void;
}

type FormState = {
  title: string;
  priority: Task["priority"];
  completed: boolean;
};

export default function TaskForm({ task, toggleAside }: TaskFormProps) {
  const dispatch = useDispatch();
  const isEditMode = !!task;
  const initialState: FormState = {
    title: task?.title ?? "",
    priority: task?.priority ?? "Medium",
    completed: task?.completed ?? false,
  };

  const [form, dispatchForm] = useReducer(
    (state: FormState, action): FormState => {
      switch (action.type) {
        case "SET_FIELD":
          return {
            ...state,
            [action.field]: action.value,
          };

        case "RESET":
          return action.payload;

        default:
          return state;
      }
    },
    initialState,
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!form.title.trim()) {
      newErrors.title = "Task title is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    if (isEditMode) {
      dispatch(
        editTask({
          id: task.id,
          ...form,
        }),
      );
    } else {
      dispatch(addTask({ id: generateUUID(), ...form }));
    }

    dispatchForm({ type: "SET_FIELD", field: "title", value: "" });
    toggleAside();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-4">
      <Input
        id="title"
        name="title"
        value={form.title}
        onChange={(e) =>
          dispatchForm({
            type: "SET_FIELD",
            field: "title",
            value: e.target.value,
          })
        }
        label="Task Title"
        placeholder="e.g. Create a task manager APP"
        required
        error={errors.title}
      />

      <Select
        id="priority"
        name="priority"
        label="Priority Level"
        value={form.priority}
        onChange={(e) =>
          dispatchForm({
            type: "SET_FIELD",
            field: "priority",
            value: e.target.value,
          })
        }
        options={[
          { label: "Low Priority", value: "Low" },
          { label: "Medium Priority", value: "Medium" },
          { label: "High Priority", value: "High" },
        ]}
        error={errors.priority}
      />

      <Select
        id="completed"
        name="completed"
        label="Status State"
        value={String(form.completed)}
        onChange={(e) =>
          dispatchForm({
            type: "SET_FIELD",
            field: "completed",
            value: e.target.value === "true",
          })
        }
        options={[
          { label: "In Progress", value: "false" },
          { label: "Completed", value: "true" },
        ]}
        error={errors.completed}
      />

      <div className="flex gap-4 self-end">
        <Button
          text="Cancel"
          style="gray"
          type="button"
          onClick={() => {
            toggleAside();
          }}
        />

        <Button
          text={isEditMode ? "Update Task" : "Create Task"}
          style="blue"
          type="submit"
          icon={<SaveIcon width="16" height="16" />}
        />
      </div>
    </form>
  );
}
