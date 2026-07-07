import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600 to-cyan-500 p-14 text-center shadow-2xl">

        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl"></div>

        <div className="relative z-10">

          <h2 className="text-5xl font-extrabold leading-tight">
            Ready to Transform
            <br />
            Customer Support?
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-blue-100 leading-8">
            Automate customer conversations, reduce response time,
            create tickets instantly and delight your customers
            with AI-powered support.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Start Free Demo
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/about"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}