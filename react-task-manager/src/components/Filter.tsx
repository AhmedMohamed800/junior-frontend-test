import Select from "./Form/Select";
import type { Filter } from "../types/filter";
import { SearchIcon } from "./General/Icons";

interface FilterProps {
  filtersState: Filter;
  setFiltersState: React.Dispatch<React.SetStateAction<Filter>>;
}

export default function Filter({ filtersState, setFiltersState }: FilterProps) {
  return (
    <section className="flex flex-col sm:flex-row items-end gap-2 mt-4">
      <div className="flex flex-2 w-full relative h-12.5">
        <input
          type="text"
          className="w-full text-white  border border-border  h-12.5 border-b-3 pl-10"
          onChange={(e) => {
            setFiltersState((prev: Filter) => {
              return { ...prev, query: e.target.value };
            });
          }}
        />
        <SearchIcon className=" absolute top-[50%] translate-y-[-50%] left-2" />
      </div>

      <div className="flex max-sm:w-full   gap-2">
        <Select
          id="priority"
          name="priority"
          label="Priority Level"
          value={filtersState.priority}
          onChange={(e) => {
            setFiltersState((prev: Filter) => {
              return {
                ...prev,
                priority: e.target.value as Filter["priority"],
              };
            });
          }}
          options={[
            { label: "All", value: "All" },
            { label: "Low Priority", value: "Low" },
            { label: "Medium Priority", value: "Medium" },
            { label: "High Priority", value: "High" },
          ]}
        />

        <Select
          id="completed"
          name="completed"
          label="Status State"
          value={String(filtersState.status)}
          onChange={(e) => {
            setFiltersState((prev: Filter) => {
              return { ...prev, status: e.target.value as Filter["status"] };
            });
          }}
          options={[
            { label: "All", value: "All" },
            { label: "In Progress", value: "In Progress" },
            { label: "Completed", value: "Completed" },
          ]}
        />
      </div>
    </section>
  );
}
