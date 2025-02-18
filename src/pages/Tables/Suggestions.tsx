import React from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableTwo from "../../components/tables/BasicTableTwo";
import BasicTbleThree from "../../components/tables/BasicTbleThree";

export default function Suggestions() {
  return (
    <>
          <PageMeta
  title="E.P.I.C EXTRANET - Waste Collection and Transportation Dashboard"
  description="The E.P.I.C EXTRANET organization was established in accordance with Decree No. 83-200 of March 19, 1983. EXTRANET is a public institution with industrial and commercial characteristics (E.P.I.C), responsible for cleaning, waste collection, and transportation for the 29 municipalities outside the city limits of the Wilaya of Algiers."
/>

      <PageBreadcrumb pageTitle="Suggestions & Concerns" />
      <div className="space-y-6">
        <ComponentCard title="Suggestions & Concerns">
          <BasicTbleThree />
        </ComponentCard>
      </div>
    </>
  );
}
