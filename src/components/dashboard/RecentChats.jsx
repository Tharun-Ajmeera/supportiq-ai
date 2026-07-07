const chats = [
  {
    customer: "John",
    message: "I need a refund.",
    time: "2 min ago",
  },
  {
    customer: "Emma",
    message: "Payment failed.",
    time: "10 min ago",
  },
  {
    customer: "David",
    message: "Order not delivered.",
    time: "20 min ago",
  },
];

export default function RecentChats() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">
        Recent Conversations
      </h2>

      <div className="space-y-5">
        {chats.map((chat, index) => (
          <div
            key={index}
            className="border-b border-gray-800 pb-4"
          >
            <h3 className="font-semibold">
              {chat.customer}
            </h3>

            <p className="text-gray-400 mt-2">
              {chat.message}
            </p>

            <p className="text-xs text-gray-500 mt-2">
              {chat.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}