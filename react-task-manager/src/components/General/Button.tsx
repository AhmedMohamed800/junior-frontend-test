interface ButtonProps {
  icon: React.ReactNode;
  text: string;
  style: "blue" | "gray";
  onClick?: () => void;
}

export default function Button({ icon, text, style, onClick }: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 text-white ${style === "blue" ? "bg-primary" : "bg-border"}  font-medium px-2 py-3 cursor-pointer hover:opacity-80`}
      onClick={onClick}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
}
