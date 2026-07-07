export default function PriorityBadge({ priority }) {
  const colors = {
    High: "text-red-400",
    Medium: "text-yellow-400",
    Low: "text-green-400",
  };

  return (
    <span className={`font-semibold ${colors[priority]}`}>
      {priority}
    </span>
  );
}