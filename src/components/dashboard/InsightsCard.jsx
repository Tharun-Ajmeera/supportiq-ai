export default function InsightsCard() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

      <h2 className="text-xl font-bold mb-6">
        AI Insights
      </h2>

      <div className="space-y-6">

        <div>
          <p className="text-gray-400">Average Response Time</p>
          <h2 className="text-3xl font-bold mt-2">
            8 sec
          </h2>
        </div>

        <div>
          <p className="text-gray-400">Customer Mood</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            😊 Positive
          </h2>
        </div>

        <div>
          <p className="text-gray-400">AI Accuracy</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">
            98.6%
          </h2>
        </div>

      </div>

    </div>
  );
}