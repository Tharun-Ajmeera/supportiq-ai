import {
  Plus,
  MessageSquare,
  Trash2,
  Search,
} from "lucide-react";

const todayChats = [
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
    title: "Track Order",
  },
];

const yesterdayChats = [
  {
    id: 4,
    title: "Delivery Delay",
  },
  {
    id: 5,
    title: "Login Issue",
  },
];

export default function ChatSidebar() {
  return (
    <aside className="flex w-80 flex-col border-r border-gray-800 bg-[#111827]">

      {/* Header */}

      <div className="border-b border-gray-800 p-5">

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700">

          <Plus size={18} />

          New Chat

        </button>

      </div>

      {/* Search */}

      <div className="p-5">

        <div className="flex items-center gap-3 rounded-xl bg-[#1F2937] px-4 py-3">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            placeholder="Search chats..."
            className="w-full bg-transparent outline-none"
          />

        </div>

      </div>

      {/* Chat History */}

      <div className="flex-1 overflow-y-auto px-4">

        {/* Today */}

        <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
          Today
        </p>

        {todayChats.map((chat) => (

          <button
            key={chat.id}
            className="mb-2 flex w-full items-center justify-between rounded-xl p-3 transition hover:bg-[#1F2937]"
          >

            <div className="flex items-center gap-3">

              <MessageSquare
                size={18}
                className="text-blue-400"
              />

              <span>{chat.title}</span>

            </div>

          </button>

        ))}

        {/* Yesterday */}

        <p className="mb-3 mt-8 text-xs uppercase tracking-widest text-gray-500">
          Yesterday
        </p>

        {yesterdayChats.map((chat) => (

          <button
            key={chat.id}
            className="mb-2 flex w-full items-center justify-between rounded-xl p-3 transition hover:bg-[#1F2937]"
          >

            <div className="flex items-center gap-3">

              <MessageSquare
                size={18}
                className="text-gray-400"
              />

              <span>{chat.title}</span>

            </div>

          </button>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-gray-800 p-5">

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500 py-3 text-red-400 transition hover:bg-red-500 hover:text-white">

          <Trash2 size={18} />

          Clear History

        </button>

      </div>

    </aside>
  );
}