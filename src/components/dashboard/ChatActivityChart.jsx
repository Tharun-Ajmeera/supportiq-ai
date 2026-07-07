import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", chats: 120 },
  { day: "Tue", chats: 190 },
  { day: "Wed", chats: 240 },
  { day: "Thu", chats: 180 },
  { day: "Fri", chats: 300 },
  { day: "Sat", chats: 260 },
  { day: "Sun", chats: 340 },
];

export default function ChatActivityChart() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">
        Chat Activity
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#1F2937" />
          <XAxis dataKey="day" stroke="#9CA3AF" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="chats"
            stroke="#3B82F6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}