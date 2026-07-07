import {
  MessageSquare,
  Ticket,
  CircleCheck,
  Smile,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Chats"
        value="24,568"
        change="+18% this week"
        color="bg-blue-600"
        icon={<MessageSquare />}
      />

      <StatCard
        title="Open Tickets"
        value="128"
        change="+6 today"
        color="bg-orange-600"
        icon={<Ticket />}
      />

      <StatCard
        title="Resolved"
        value="98%"
        change="+3%"
        color="bg-green-600"
        icon={<CircleCheck />}
      />

      <StatCard
        title="Satisfaction"
        value="4.9"
        change="Excellent"
        color="bg-pink-600"
        icon={<Smile />}
      />

    </div>
  );
}