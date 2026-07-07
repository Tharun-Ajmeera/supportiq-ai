import MainLayout from "../../components/layout/MainLayout";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsGrid from "../../components/dashboard/StatsGrid";

export default function Dashboard() {
  return (
    <MainLayout>

      <DashboardHeader />

      <StatsGrid />

    </MainLayout>
  );
}