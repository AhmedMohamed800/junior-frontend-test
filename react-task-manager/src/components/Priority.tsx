export default function Priority({
  status,
}: {
  status: "Low" | "Medium" | "High";
}) {
  if (status === "Low") {
    return (
      <p className="bg-low-bg text-low-text border-low-border border p-1 px-2 text-sm font-medium">
        Low Priority
      </p>
    );
  }

  if (status === "Medium") {
    return (
      <p className="bg-medium-bg text-medium-text border-medium-border border p-1 px-2 text-sm font-medium">
        Medium Priority
      </p>
    );
  }

  if (status === "High") {
    return (
      <p className="bg-high-bg text-high-text border-high-border border p-1 px-2 text-sm font-medium">
        High Priority
      </p>
    );
  }
}
