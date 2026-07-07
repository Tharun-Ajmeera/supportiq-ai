import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex gap-4 mb-8">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-700">
        <Bot size={18} />
      </div>

      <div className="rounded-2xl bg-[#1F2937] px-6 py-5">

        <div className="flex gap-2">

          <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></span>

          <span
            className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>

          <span
            className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>

        </div>

      </div>

    </div>
  );
}