import MessageBubble from "./MessageBubble";
import SuggestedPrompts from "./SuggestedPrompts";
import TypingIndicator from "./TypingIndicator";

const messages = [
  {
    id: 1,
    sender: "user",
    text: "Hello, I need a refund for my recent order.",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "ai",
    text:
      "Sure! Please provide your Order ID. I'll help you process the refund immediately.",
    time: "10:30 AM",
  },
];

export default function ChatWindow() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0B1120] p-8">

      <SuggestedPrompts />

      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
        />
      ))}

      <TypingIndicator />

    </div>
  );
}