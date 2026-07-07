import { useState } from "react";

import MainLayout from "../../components/layout/MainLayout";

import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatHeader from "../../components/chat/ChatHeader";
import ChatWindow from "../../components/chat/ChatWindow";
import ChatInput from "../../components/chat/ChatInput";

import { sendMessageToAI } from "../../services/chatService";

const initialMessages = [
  {
    id: 1,
    sender: "ai",
    text: "👋 Welcome to SupportIQ AI!",
    time: "Now",
  },
];

export default function Chat() {
  const [messages, setMessages] = useState(initialMessages);

  const [loading, setLoading] = useState(false);

  async function sendMessage(text) {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
      time: "Now",
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    const response = await sendMessageToAI(text);

    const aiMessage = {
      id: Date.now() + 1,
      sender: "ai",
      text: response.reply,
      time: "Now",
    };

    setMessages((prev) => [...prev, aiMessage]);

    setLoading(false);
  }

  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-120px)] overflow-hidden rounded-2xl border border-gray-800 bg-[#0F172A]">

        <ChatSidebar />

        <div className="flex flex-1 flex-col">

          <ChatHeader />

          <ChatWindow
            messages={messages}
            loading={loading}
          />

          <ChatInput
            onSend={sendMessage}
          />

        </div>

      </div>
    </MainLayout>
  );
}