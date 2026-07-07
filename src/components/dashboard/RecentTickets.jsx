const tickets = [
  {
    id: "SUP-2045",
    customer: "John Smith",
    issue: "Refund Request",
    status: "Open",
    priority: "High",
  },
  {
    id: "SUP-2046",
    customer: "Emma Watson",
    issue: "Payment Failed",
    status: "Resolved",
    priority: "Medium",
  },
  {
    id: "SUP-2047",
    customer: "Alex Johnson",
    issue: "Account Login",
    status: "Pending",
    priority: "Low",
  },
];

export default function RecentTickets() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">Recent Tickets</h2>

      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="flex justify-between items-center p-4 rounded-xl bg-[#1F2937]"
          >
            <div>
              <h3 className="font-semibold">{ticket.id}</h3>
              <p className="text-gray-400 text-sm">{ticket.customer}</p>
              <p className="text-gray-500 text-sm">{ticket.issue}</p>
            </div>

            <div className="text-right">
              <span className="px-3 py-1 rounded-full bg-blue-600 text-sm">
                {ticket.status}
              </span>

              <p className="text-gray-400 text-sm mt-2">
                {ticket.priority}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}