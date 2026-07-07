import { Bot, User } from "lucide-react";

export default function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-6`}
    >
      <div
        className={`flex max-w-3xl gap-4 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`h-11 w-11 rounded-full flex items-center justify-center ${
            isUser ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          {isUser ? <User size={18} /> : <Bot size={18} />}
        </div>

        <div
          className={`rounded-2xl px-5 py-4 ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-[#1F2937] text-gray-100"
          }`}
        >
          <p className="leading-7">{message.text}</p>

          <p className="mt-3 text-xs opacity-70">
            {message.time}
          </p>
        </div>
      </div>
    </div>
  );
}