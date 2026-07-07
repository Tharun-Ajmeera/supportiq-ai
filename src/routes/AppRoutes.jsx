import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Chat from "../pages/Chat/Chat";
import Dashboard from "../pages/Dashboard/Dashboard";
import Tickets from "../pages/Tickets/Tickets";
import KnowledgeBase from "../pages/KnowledgeBase/KnowledgeBase";
import Settings from "../pages/Settings/Settings";
import About from "../pages/About/About";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}