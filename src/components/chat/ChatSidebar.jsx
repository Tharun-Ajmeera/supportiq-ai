import { Plus, MessageSquare } from "lucide-react";

const chats = [
  {
    id: 1,
    title: "Refund Request",
  },
  {
    id: 2,
    title: "Payment Failed",
  },
  {
    id: 3,
    title: "Order Tracking",
  },
  {
    id: 4,
    title: "Delivery Issue",
  },
];

export default function ChatSidebar() {
  return (
    <aside className="w-72 border-r border-gray-800 bg-[#111827] flex flex-col">

      <div className="p-5">

        <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700 transition">

          <Plus size={18} />

          New Chat

        </button>

      </div>

      <div className="px-5 pb-3">

        <p className="text-xs uppercase tracking-widest text-gray-500">
          Recent Conversations
        </p>

      </div>

      <div className="flex-1 overflow-y-auto px-3">

        {chats.map((chat) => (

          <button
            key={chat.id}
            className="mb-2 flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-[#1F2937] transition"
          >

            <MessageSquare
              size={18}
              className="text-blue-400"
            />

            <span>{chat.title}</span>

          </button>

        ))}

      </div>

    </aside>
  );
}