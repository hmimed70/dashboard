import React from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import LineChartOne from "../../components/charts/line/LineChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function LineChart() {
  return (
    <>
    <PageMeta
  title="E.P.I.C EXTRANET - Waste Collection and Transportation Dashboard"
  description="The E.P.I.C EXTRANET organization was established in accordance with Decree No. 83-200 of March 19, 1983. EXTRANET is a public institution with industrial and commercial characteristics (E.P.I.C), responsible for cleaning, waste collection, and transportation for the 29 municipalities outside the city limits of the Wilaya of Algiers."
/>

      <PageBreadcrumb pageTitle="Line Chart" />
      <div className="space-y-6">
        <ComponentCard title="Line Chart 1">
          <LineChartOne />
        </ComponentCard>
      </div>
    </>
  );
}
