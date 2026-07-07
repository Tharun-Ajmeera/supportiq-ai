import { useEffect, useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import TicketTable from "../../components/tickets/TicketTable";

import { getTickets } from "../../services/ticketService";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function loadTickets() {
      const data = await getTickets();
      setTickets(data);
    }

    loadTickets();
  }, []);

  return (
    <MainLayout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Ticket Management
        </h1>

        <p className="mt-2 text-gray-400">
          View and manage all AI-generated support tickets.
        </p>

      </div>

      <TicketTable tickets={tickets} />

    </MainLayout>
  );
}