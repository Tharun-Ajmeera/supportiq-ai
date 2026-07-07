import { useState } from "react";
import {
  Paperclip,
  Mic,
  Send,
} from "lucide-react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  }

  return (
    <div className="border-t border-gray-800 bg-[#111827] p-5">

      <div className="flex items-center gap-3 rounded-2xl border border-gray-700 bg-[#1F2937] px-4 py-3 shadow-lg">

        {/* Attachment */}
        <button className="text-gray-400 hover:text-white transition">
          <Paperclip size={20} />
        </button>

        {/* Message Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask SupportIQ AI anything..."
          className="flex-1 bg-transparent text-white placeholder:text-gray-500 outline-none"
        />

        {/* Voice */}
        <button className="text-gray-400 hover:text-blue-400 transition">
          <Mic size={20} />
        </button>

        {/* Send */}
        <button
          onClick={handleSend}
          className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-700"
        >
          <Send size={18} />
        </button>

      </div>

    </div>
  );
}