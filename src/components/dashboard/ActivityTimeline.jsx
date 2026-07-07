const activities = [
  "AI created Ticket SUP-2045",
  "Refund request resolved",
  "Knowledge Base updated",
  "New customer registered",
  "Payment issue detected",
];

export default function ActivityTimeline() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Activity Timeline
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex gap-4"
          >
            <div className="h-3 w-3 rounded-full bg-blue-500 mt-2"></div>

            <div>
              <p>{activity}</p>
              <span className="text-gray-500 text-sm">
                Just now
              </span>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}