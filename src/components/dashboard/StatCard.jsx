export default function StatCard({
  title,
  value,
  icon,
  color,
  change,
}) {
  return (
    <div className="rounded-2xl bg-[#111827] border border-gray-800 p-6 hover:border-blue-500 transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

          <p className="text-green-400 mt-4 text-sm">
            {change}
          </p>

        </div>

        <div
          className={`h-16 w-16 rounded-2xl ${color} flex items-center justify-center`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}