import MainLayout from "../../components/layout/MainLayout";
import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatHeader from "../../components/chat/ChatHeader";
import ChatWindow from "../../components/chat/ChatWindow";
import ChatInput from "../../components/chat/ChatInput";

export default function Chat() {
  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-120px)] overflow-hidden rounded-2xl border border-gray-800 bg-[#0F172A]">

        {/* Sidebar */}
        <ChatSidebar />

        {/* Chat Area */}
        <div className="flex flex-1 flex-col">

          <ChatHeader />

          <ChatWindow />

          <ChatInput />

        </div>

      </div>
    </MainLayout>
  );
}