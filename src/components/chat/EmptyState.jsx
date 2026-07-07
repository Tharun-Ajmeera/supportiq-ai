import {
  Sparkles,
  MessageCircle,
  Ticket,
  BookOpen,
} from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">

      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600">

        <Sparkles size={42} />

      </div>

      <h2 className="text-4xl font-bold">
        Welcome to SupportIQ AI
      </h2>

      <p className="mt-5 max-w-xl text-lg text-gray-400">
        Ask questions, create support tickets,
        search your knowledge base and automate
        customer conversations.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-5">

        <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">

          <MessageCircle className="mb-4 text-blue-400" />

          AI Chat

        </div>

        <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">

          <Ticket className="mb-4 text-green-400" />

          Ticket Automation

        </div>

        <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">

          <BookOpen className="mb-4 text-purple-400" />

          Knowledge Base

        </div>

        <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">

          <Sparkles className="mb-4 text-yellow-400" />

          AI Assistant

        </div>

      </div>

    </div>
  );
}