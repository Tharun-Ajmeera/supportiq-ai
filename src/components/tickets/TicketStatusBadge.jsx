export default function TicketStatusBadge({ status }) {
  const colors = {
    Open: "bg-blue-500",
    Resolved: "bg-green-500",
    Pending: "bg-yellow-500",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${colors[status]}`}
    >
      {status}
    </span>
  );
}