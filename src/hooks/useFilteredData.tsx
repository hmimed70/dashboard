import { useMemo } from "react";
import { dairaData, xaxisCategories } from "../data/index";

export function useFilteredData(selectedDaïra: keyof typeof dairaData | "all") {
  // Define a default options object (chart configuration)
  const options = {
    chart: {
      type: "line",
      height: 350,
    },
    title: {
      text: "Sales Data",
      align: "center",
    },
    xaxis: {
      categories: [],
    },
    stroke: {
      curve: "smooth",
    },
  };

  // Filter data based on the selected daïra
  const filteredData = useMemo(() => {
    return selectedDaïra === "all"
      ? Object.values(dairaData).flat()
      : dairaData[selectedDaïra];
  }, [selectedDaïra]);

  // Define series data
  const series = useMemo(() => [
    {
      name: "Sales",
      data: filteredData,
    },
  ], [filteredData]);

  // Define updated options with x-axis categories based on the selected daïra
  const updatedOptions = useMemo(() => {
    return {
      ...options,
      xaxis: {
        ...options.xaxis,
        categories: xaxisCategories[selectedDaïra],
      },
    };
  }, [selectedDaïra, options]);

  return { filteredData, series, updatedOptions };
}
