import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";

export default function Ecommerce() {
  return (
    <>
      <PageMeta
  title="E.P.I.C EXTRANET - Waste Collection and Transportation Dashboard"
  description="The E.P.I.C EXTRANET organization was established in accordance with Decree No. 83-200 of March 19, 1983. EXTRANET is a public institution with industrial and commercial characteristics (E.P.I.C), responsible for cleaning, waste collection, and transportation for the 29 municipalities outside the city limits of the Wilaya of Algiers."
/>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>
  {
    /*
        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
    
    */
  }
    
      </div>
    </>
  );
}
