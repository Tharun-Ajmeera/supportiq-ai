import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

      <div>
        <p className="text-gray-400 text-sm">
          Welcome Back 👋
        </p>

        <h1 className="text-4xl font-bold mt-2">
          Dashboard Overview
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor customer conversations, tickets and AI performance.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-3 bg-[#111827] border border-gray-800 rounded-xl px-4 py-3 w-80">

          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm"
          />

        </div>

        <button className="h-12 w-12 rounded-xl bg-[#111827] border border-gray-800 flex items-center justify-center hover:border-blue-500 transition">

          <Bell size={20} />

        </button>

      </div>

    </div>
  );
}