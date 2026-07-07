import { Paperclip, Mic, Send } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="border-t border-gray-800 bg-[#111827] p-5">

      <div className="flex items-center gap-3 rounded-xl border border-gray-700 bg-[#1F2937] px-4 py-3">

        <Paperclip size={20} />

        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-transparent outline-none"
        />

        <Mic
          size={20}
          className="cursor-pointer"
        />

        <button className="rounded-lg bg-blue-600 p-3 hover:bg-blue-700 transition">

          <Send size={18} />

        </button>

      </div>

    </div>
  );
}