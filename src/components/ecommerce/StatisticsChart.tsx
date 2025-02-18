import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { dairaData, DairaData } from "../../data"; // Import the correct types

export default function StatisticsChart() {
  // Prepare the series data for each daïra
  const series = Object.keys(dairaData).map((dairaName) => {
    // Typecast dairaName to keyof DairaData to ensure it is a valid key
    const key = dairaName as keyof DairaData;
    const totalOrders = dairaData[key].reduce((sum, order) => sum + order, 0); // Total count of orders for the daïra
    return {
      name: dairaName,
      data: [totalOrders], // Total count of orders for the daïra
    };
  });

  // X-axis categories are now the names of the daïras
  const allCategories = Object.keys(dairaData);

  // Chart options
  const options: ApexOptions = {
    legend: {
      show: true, // Show legend to differentiate between daïra regions
      position: "top",
      horizontalAlign: "left",
    },
    colors: series.map((_, index) => `hsl(${(index * 40) % 360}, 70%, 60%)`), // Generate dynamic colors
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "bar", // Changed to 'bar' to represent the count of orders visually
      toolbar: {
        show: false, // Hide chart toolbar
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "80%", // Control the bar width
        distributed: true, // Distribute the bars evenly
      },
    },
    markers: {
      size: 0, // Size of the marker points
      strokeColors: "#fff", // Marker border color
      strokeWidth: 2,
      hover: {
        size: 6, // Marker size on hover
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false, // Hide grid lines on x-axis
        },
      },
      yaxis: {
        lines: {
          show: true, // Show grid lines on y-axis
        },
      },
    },
    dataLabels: {
      enabled: true, // Enable data labels to show total count on each bar
    },
    tooltip: {
      enabled: true, // Enable tooltip
      x: {
        format: "dd MMM yyyy", // Format for x-axis tooltip
      },
    },
    xaxis: {
      type: "category", // Category-based x-axis
      categories: allCategories, // Use the names of all daïras
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      tooltip: {
        enabled: true, // Enable tooltip for x-axis points
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px", // Adjust font size for y-axis labels
          colors: ["#6B7280"], // Color of the labels
        },
      },
      title: {
        text: "Total Orders", // Set y-axis title to 'Total Orders'
        style: {
          fontSize: "14px",
        },
      },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Statistics
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Orders by daïra with total counts
          </p>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1000px] xl:min-w-full">
          <Chart options={options} series={series} type="bar" height={310} />
        </div>
      </div>
    </div>
  );
}