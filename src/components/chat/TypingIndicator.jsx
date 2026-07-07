export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 mt-6">

      <div className="h-10 w-10 rounded-full bg-gray-700"></div>

      <div className="rounded-2xl bg-[#1F2937] px-5 py-4">

        <div className="flex gap-2">

          <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></span>

          <span
            className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>

        </div>

      </div>

    </div>
  );
}