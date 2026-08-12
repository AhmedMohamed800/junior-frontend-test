import type React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export default function Input({
  label,
  error,
  required = false,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-sm text-white">
        {label} {required && <span className="text-high-border">*</span>}
      </label>

      <input
        {...props}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.id}-error` : undefined}
        className={`border bg-transparent px-4 py-3 text-white outline-none transition ${
          error
            ? "border-high-border focus:border-high-border"
            : "border-border border-b-3  focus:border-primary"
        } ${className}`}
      />

      {error && (
        <span id={`${props.id}-error`} className="text-sm text-high-border">
          {error}
        </span>
      )}
    </div>
  );
}
