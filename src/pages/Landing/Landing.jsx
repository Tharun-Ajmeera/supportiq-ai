import { Link } from "react-router-dom";
import HowItWorks from "../../components/common/HowItWorks";
import LiveDemo from "../../components/common/LiveDemo";
import {
  Bot,
  MessageSquare,
  Ticket,
  BookOpen,
  BarChart3,
  Clock3,
} from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: <MessageSquare size={34} />,
      title: "AI Chat",
      description:
        "Instantly answer customer questions using intelligent AI conversations.",
    },
    {
      icon: <Ticket size={34} />,
      title: "Smart Tickets",
      description:
        "Automatically create and manage support tickets from conversations.",
    },
    {
      icon: <BookOpen size={34} />,
      title: "Knowledge Base",
      description:
        "Train your AI using your company's documentation and FAQs.",
    },
    {
      icon: <BarChart3 size={34} />,
      title: "Analytics",
      description:
        "Track customer satisfaction, response time and ticket insights.",
    },
    {
      icon: <Clock3 size={34} />,
      title: "24/7 Availability",
      description:
        "Support customers day and night without hiring more agents.",
    },
    {
      icon: <Bot size={34} />,
      title: "AI Automation",
      description:
        "Automate repetitive customer support tasks with powerful AI.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* Background Blur */}
      <div className="absolute top-24 left-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"></div>

      {/* ================= HERO ================= */}

      <section className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

        <div>

          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            🚀 AI Powered Customer Support Platform
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight">

            One AI Agent.

            <br />

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Complete Customer Support.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg text-gray-400 leading-9">
            Automate customer conversations, generate tickets,
            answer questions from your knowledge base and improve
            customer satisfaction using one intelligent AI platform.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              to="/dashboard"
              className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
            >
              Get Started
            </Link>

            <button className="rounded-xl border border-gray-700 px-7 py-4 hover:border-blue-500">
              Live Demo
            </button>

          </div>

          <div className="mt-14 flex gap-12">

            <div>
              <h2 className="text-4xl font-bold">500+</h2>
              <p className="text-gray-500">Businesses</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">25K+</h2>
              <p className="text-gray-500">AI Conversations</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">98%</h2>
              <p className="text-gray-500">Satisfaction</p>
            </div>

          </div>

        </div>

        {/* Dashboard Card */}

        <div className="hover:scale-105 transition duration-500">

          <div className="rounded-3xl border border-gray-800 bg-[#111827] overflow-hidden shadow-2xl">

            <div className="flex justify-between px-6 py-5 border-b border-gray-800">

              <h3 className="font-bold text-xl">
                AI Support Dashboard
              </h3>

              <span className="text-green-400">
                ● Online
              </span>

            </div>

            <div className="space-y-5 p-6">

              <div className="rounded-xl bg-[#1F2937] p-5">

                <p className="text-xs text-gray-500">
                  Customer
                </p>

                <p className="mt-2">
                  I need a refund for my order.
                </p>

              </div>

              <div className="rounded-xl bg-blue-600 p-5">

                <h3 className="font-semibold">
                  AI Assistant
                </h3>

                <p className="mt-2">
                  Refund request received.
                </p>

                <p className="mt-3">
                  ✅ Ticket Created
                </p>

                <p>
                  Ticket ID : SUP-2045
                </p>

              </div>

              <div className="grid grid-cols-3 gap-4">

                <div className="bg-[#1F2937] rounded-xl p-4 text-center">
                  <h2 className="text-3xl font-bold">245</h2>
                  <p className="text-gray-400 text-sm">Chats</p>
                </div>

                <div className="bg-[#1F2937] rounded-xl p-4 text-center">
                  <h2 className="text-3xl font-bold">12</h2>
                  <p className="text-gray-400 text-sm">Tickets</p>
                </div>

                <div className="bg-[#1F2937] rounded-xl p-4 text-center">
                  <h2 className="text-3xl font-bold text-green-400">
                    98%
                  </h2>
                  <p className="text-gray-400 text-sm">Happy</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TRUSTED ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h3 className="text-center text-gray-500 uppercase tracking-[6px]">
          Trusted by Businesses
        </h3>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6">

          {["Microsoft", "Google", "Amazon", "Spotify", "Netflix"].map(
            (company) => (
              <div
                key={company}
                className="rounded-xl border border-gray-800 bg-[#111827] py-6 text-center text-lg font-semibold text-gray-400 hover:text-white transition"
              >
                {company}
              </div>
            )
          )}

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-center text-5xl font-bold">
          Everything You Need
        </h2>

        <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
          SupportIQ combines AI chat, ticket automation, analytics,
          and knowledge management into one powerful platform.
        </p>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-2xl border border-gray-800 bg-[#111827] p-8 hover:border-blue-500 transition"
            >

              <div className="text-blue-400">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </section>
      <HowItWorks />
      <LiveDemo />

    </div>
  );
}