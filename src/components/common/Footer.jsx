import { Mail, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              SupportIQ AI
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              AI-powered customer support platform that automates
              conversations, generates tickets, manages knowledge,
              and provides business insights.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                Dashboard
              </li>

              <li className="hover:text-white cursor-pointer transition">
                AI Chat
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Tickets
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Knowledge Base
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                About
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Connect
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@supportiq.ai</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe size={18} />
                <span>www.supportiq.ai</span>
              </div>

              <div className="flex gap-5 pt-4">
                <FaGithub
                  size={24}
                  className="cursor-pointer hover:text-white transition"
                />

                <FaLinkedin
                  size={24}
                  className="cursor-pointer hover:text-blue-400 transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 SupportIQ AI. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0 text-blue-400 text-sm">
            Built for AI Hackathon 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}