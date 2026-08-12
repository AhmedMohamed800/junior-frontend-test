import React from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  required?: boolean;
}

export default function Select({
  label,
  options,
  error,
  required = false,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="flex  flex-1 flex-col gap-2">
      <label className="text-sm text-white">
        {label} {required && <span className="text-high-border">*</span>}
      </label>

      <select
        {...props}
        aria-invalid={!error}
        aria-describedby={error ? `${props.id}-error` : undefined}
        className={`border bg-transparent px-4 py-3 text-white outline-none transition
          ${
            error
              ? "border-high-border focus:border-high-border"
              : "border-border border-b-3 focus:border-primary"
          }
          ${className}
        `}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-secondary text-white"
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <span id={`${props.id}-error`} className="text-sm text-high-border">
          {error}
        </span>
      )}
    </div>
  );
}
