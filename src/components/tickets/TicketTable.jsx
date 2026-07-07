import TicketStatusBadge from "./TicketStatusBadge";
import PriorityBadge from "./PriorityBadge";

export default function TicketTable({ tickets }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#111827]">

      <table className="w-full">

        <thead className="bg-[#1F2937]">

          <tr>

            <th className="px-6 py-4 text-left">Ticket ID</th>

            <th className="px-6 py-4 text-left">Customer</th>

            <th className="px-6 py-4 text-left">Subject</th>

            <th className="px-6 py-4 text-left">Priority</th>

            <th className="px-6 py-4 text-left">Status</th>

            <th className="px-6 py-4 text-left">Created</th>

          </tr>

        </thead>

        <tbody>

          {tickets.map((ticket) => (

            <tr
              key={ticket.id}
              className="border-t border-gray-800 hover:bg-[#1F2937]"
            >

              <td className="px-6 py-5 font-semibold">
                {ticket.id}
              </td>

              <td className="px-6 py-5">
                {ticket.customer}
              </td>

              <td className="px-6 py-5">
                {ticket.subject}
              </td>

              <td className="px-6 py-5">
                <PriorityBadge priority={ticket.priority} />
              </td>

              <td className="px-6 py-5">
                <TicketStatusBadge status={ticket.status} />
              </td>

              <td className="px-6 py-5">
                {ticket.createdAt}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}