import { Bot, Wifi } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 bg-[#111827] px-6 py-5">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">

          <Bot size={24} />

        </div>

        <div>

          <h2 className="text-xl font-bold">
            SupportIQ AI Assistant
          </h2>

          <p className="text-sm text-gray-400">
            Ask anything about your customer support.
          </p>

        </div>

      </div>

      <div className="flex items-center gap-2 text-green-400">

        <Wifi size={18} />

        <span className="text-sm">
          Online
        </span>

      </div>

    </header>
  );
}