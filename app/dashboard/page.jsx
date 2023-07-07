import { Breadcrumbs } from "@/components/Breadcrumbs";
import DailyTraffic from "@/components/DailyTraffic";
import Layout from "@/components/Layout";
import PieChartCard from "@/components/PieChartCard";
import Title from "@/components/Title";
import TotalSpent from "@/components/TotalSpent";
import Widget from "@/components/Widget";
import { MdBarChart, MdDashboard } from "react-icons/md";

export default function Dashboard() {
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Dashboard"} />

      <Title text={"Main Dashboard"} />
      <div className="px-10 ">
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Earnings"}
            subtitle={"$340.5"}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Sales"}
            subtitle={"$574.34"}
          />
          <Widget
            icon={<MdDashboard className="h-6 w-6" />}
            title={"Your Balance"}
            subtitle={"$1,000"}
          />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <TotalSpent />
          <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
            <DailyTraffic />
            <PieChartCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
