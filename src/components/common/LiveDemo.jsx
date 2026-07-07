import {
  Bot,
  User,
  Ticket,
  CheckCircle,
  Clock,
  Smile,
} from "lucide-react";

export default function LiveDemo() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <div className="text-center">

        <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
          Live Demo
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Watch AI Resolve a Customer Issue
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
          SupportIQ instantly understands customer requests,
          responds intelligently and creates tickets automatically.
        </p>

      </div>

      <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Chat */}

        <div className="rounded-3xl bg-[#111827] border border-gray-800 overflow-hidden shadow-2xl">

          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-800">

            <h3 className="font-bold text-xl flex items-center gap-2">
              <Bot size={22} />
              AI Conversation
            </h3>

            <span className="text-green-400 text-sm">
              ● Live
            </span>

          </div>

          <div className="space-y-5 p-6">

            <div className="flex gap-3">

              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                <User size={18} />
              </div>

              <div className="bg-[#1F2937] rounded-2xl p-4 max-w-sm">

                Hello, I need a refund for my order.

              </div>

            </div>

            <div className="flex gap-3 justify-end">

              <div className="bg-blue-600 rounded-2xl p-4 max-w-sm">

                Sure! Please provide your Order ID.

              </div>

              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Bot size={18} />
              </div>

            </div>

            <div className="flex gap-3">

              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                <User size={18} />
              </div>

              <div className="bg-[#1F2937] rounded-2xl p-4">

                Order ID: #ORD-20456

              </div>

            </div>

            <div className="flex gap-3 justify-end">

              <div className="bg-blue-600 rounded-2xl p-4 max-w-sm">

                Refund approved.

                <br />

                🎉 Ticket #SUP-2456 created successfully.

              </div>

              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Bot size={18} />
              </div>

            </div>

          </div>

        </div>

        {/* Analytics */}

        <div className="space-y-6">

          <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6 flex justify-between items-center">

            <div className="flex items-center gap-4">

              <Ticket className="text-blue-400" size={28} />

              <div>

                <h3 className="font-semibold">
                  Ticket Created
                </h3>

                <p className="text-gray-400 text-sm">
                  #SUP-2456
                </p>

              </div>

            </div>

            <CheckCircle className="text-green-400" />

          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6 flex justify-between items-center">

            <div className="flex items-center gap-4">

              <Clock className="text-yellow-400" size={28} />

              <div>

                <h3 className="font-semibold">
                  Resolution Time
                </h3>

                <p className="text-gray-400 text-sm">
                  8 Seconds
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6 flex justify-between items-center">

            <div className="flex items-center gap-4">

              <Smile className="text-green-400" size={28} />

              <div>

                <h3 className="font-semibold">
                  Customer Satisfaction
                </h3>

                <p className="text-gray-400 text-sm">
                  Positive
                </p>

              </div>

            </div>

            <span className="text-green-400 font-bold">
              98%
            </span>

          </div>

          <div className="rounded-2xl border border-blue-600 bg-blue-600/10 p-8">

            <h2 className="text-5xl font-bold text-blue-400">

              24/7

            </h2>

            <p className="mt-3 text-gray-300">

              AI never sleeps.

              Your customers always receive instant support.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}