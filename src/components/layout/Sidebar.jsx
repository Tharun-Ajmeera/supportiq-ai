import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiMessageSquare,
  FiGrid,
  FiFileText,
  FiBook,
  FiSettings,
  FiInfo,
} from "react-icons/fi";

const menuItems = [
  { name: "Home", path: "/", icon: FiHome },
  { name: "Dashboard", path: "/dashboard", icon: FiGrid },
  { name: "Chat", path: "/chat", icon: FiMessageSquare },
  { name: "Tickets", path: "/tickets", icon: FiFileText },
  { name: "Knowledge Base", path: "/knowledge-base", icon: FiBook },
  { name: "Settings", path: "/settings", icon: FiSettings },
  { name: "About", path: "/about", icon: FiInfo },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] border-r border-gray-800 min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-500">
          SupportIQ AI
        </h2>
      </div>

      <nav className="px-3 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}