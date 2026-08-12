export interface Filter {
  query: string;
  priority: "Low" | "Medium" | "High" | "All";
  status: "All" | "In Progress" | "Completed";
}
