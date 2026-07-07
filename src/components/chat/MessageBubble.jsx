import {
  Bot,
  User,
 Copy,
 ThumbsUp,
 ThumbsDown,
 Ticket,
} from "lucide-react";

export default function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`mb-8 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-3xl gap-4 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full ${
            isUser ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          {isUser ? <User size={18} /> : <Bot size={18} />}
        </div>

        {/* Bubble */}

        <div>

          <div
            className={`rounded-2xl px-5 py-4 ${
              isUser
                ? "bg-blue-600"
                : "bg-[#1F2937]"
            }`}
          >
            <p className="leading-7 whitespace-pre-wrap">
              {message.text}
            </p>
          </div>

          {/* Footer */}

          <div className="mt-2 flex items-center gap-4 text-gray-500">

            <span className="text-xs">
              {message.time}
            </span>

            {!isUser && (
              <>
                <button className="hover:text-white">
                  <Copy size={15} />
                </button>

                <button className="hover:text-green-400">
                  <ThumbsUp size={15} />
                </button>

                <button className="hover:text-red-400">
                  <ThumbsDown size={15} />
                </button>

                <button className="hover:text-blue-400">
                  <Ticket size={15} />
                </button>
              </>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}