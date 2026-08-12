interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
  style: "blue" | "gray";
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  icon,
  text,
  style,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 text-white ${style === "blue" ? "bg-primary" : "bg-border"}  font-medium p-3 cursor-pointer hover:opacity-80`}
      onClick={onClick}
      type={type}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
}
