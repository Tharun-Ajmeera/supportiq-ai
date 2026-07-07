import MainLayout from "../../components/layout/MainLayout";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsGrid from "../../components/dashboard/StatsGrid";
import ChatActivityChart from "../../components/dashboard/ChatActivityChart";
import TicketChart from "../../components/dashboard/TicketChart";

export default function Dashboard() {
  return (
    <MainLayout>

      <DashboardHeader />

      <StatsGrid />

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <ChatActivityChart />
        <TicketChart />
      </div>

    </MainLayout>
  );
}