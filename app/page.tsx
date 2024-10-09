import BarChartComponent from "./components/ui/ChartEmod";
import {AreaChartComponent} from "./components/ui/AreaChart"; 
import {DataTableDemo} from "./components/ui/TableData";
import { NewChart } from "@/app/components/ui/NewChart";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center 
     min-h-screen p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)] z-0">
        <div className="flex flex-row justify-center z-0 gap-6">
        <NewChart />
        <DataTableDemo />
        
      </div>
     <div className="flex flex-row justify-center z-0 gap-6 ">
     <BarChartComponent  />
     <AreaChartComponent />
     </div>
      
      
    
    </div>
  );
}
