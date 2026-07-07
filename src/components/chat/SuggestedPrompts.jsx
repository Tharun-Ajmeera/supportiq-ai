const prompts = [
  "Track my order",
  "Refund request",
  "Delivery issue",
  "Payment failed",
];

export default function SuggestedPrompts() {
  return (
    <div className="mb-8">

      <p className="mb-4 text-gray-400">
        Suggested Prompts
      </p>

      <div className="flex flex-wrap gap-3">

        {prompts.map((prompt) => (
          <button
            key={prompt}
            className="rounded-full border border-gray-700 px-4 py-2 hover:border-blue-500 hover:bg-blue-500/10 transition"
          >
            {prompt}
          </button>
        ))}

      </div>

    </div>
  );
}