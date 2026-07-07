import {
  MessageSquare,
  BrainCircuit,
  Ticket,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <MessageSquare size={34} />,
    title: "Customer Starts Chat",
    description:
      "Customers ask questions through your website or support portal. AI receives every message instantly.",
  },
  {
    id: "02",
    icon: <BrainCircuit size={34} />,
    title: "AI Understands Request",
    description:
      "SupportIQ analyzes intent using your knowledge base and decides the best response.",
  },
  {
    id: "03",
    icon: <Ticket size={34} />,
    title: "Ticket Created Automatically",
    description:
      "If needed, AI generates a support ticket and assigns it to the right department.",
  },
  {
    id: "04",
    icon: <BarChart3 size={34} />,
    title: "Analytics & Insights",
    description:
      "Track response time, customer satisfaction and ticket trends from one dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <div className="text-center">

        <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
          Workflow
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          How SupportIQ Works
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
          From the first customer message to ticket resolution,
          everything happens automatically with AI.
        </p>

      </div>

      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {steps.map((step) => (

          <div
            key={step.id}
            className="relative rounded-3xl border border-gray-800 bg-[#111827] p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
          >

            <span className="absolute right-6 top-6 text-5xl font-black text-gray-800">
              {step.id}
            </span>

            <div className="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
              {step.icon}
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              {step.title}
            </h3>

            <p className="mt-5 text-gray-400 leading-8">
              {step.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}