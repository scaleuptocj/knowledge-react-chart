import BarChart from "@/components/BarChat";
import DoughnutChart from "@/components/DoughnutChart";
import RadarChart from "@/components/RadarChart";

export default function Home() {
  return (
    <main>
      <div className="py-8 px-2 lg:px-8">
        <h2 className="text-center text-lg font-semibold">Charts</h2>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RadarChart />
          <DoughnutChart />
        </div>
        <div className=" mt-20">
          <BarChart />
        </div>
      </div>
    </main>
  );
}
