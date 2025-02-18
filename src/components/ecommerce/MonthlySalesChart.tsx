import { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { MoreDotIcon } from "../../icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { dairaData, xaxisCategories, DairaData } from "../../data/index"; // Import the data

export default function MonthlySalesChart() {
  const options: ApexOptions = {
    colors: ["#465fff"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 180,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "39%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [], // Initially empty, will be updated based on selected daïra
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDaïra, setSelectedDaïra] = useState<keyof DairaData | "all">("all");

  // Handle data filtering by daïra
  const filteredData =
    selectedDaïra === "all"
      ? Object.values(dairaData).flat()
      : dairaData[selectedDaïra];

  // Update xaxis categories based on selected daïra
  const series = [
    {
      name: "Sales",
      data: filteredData,
    },
  ];

  // Update options with the correct xaxis categories
  const updatedOptions = {
    ...options,
    xaxis: {
      ...options.xaxis,
      categories: xaxisCategories[selectedDaïra],
    },
  };

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  function handleDairaChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedDaïra(e.target.value as keyof DairaData | "all");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Monthly Sales
        </h3>
        <div className="relative inline-block">
          <button onClick={toggleDropdown}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
          </button>
          <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
  
      <div className="flex justify-between mb-4">
        {/* Dropdown for selecting Daïra */}
        <select
          value={selectedDaïra}
          onChange={handleDairaChange}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="Zeralda">Zéralda</option>
          <option value="Rouiba">Rouiba</option>
          <option value="DarElBeida">Dar El Beida</option>
          <option value="Baraki">Baraki</option>
          <option value="Draria">Draria</option>
          <option value="Cheraga">Chéraga</option>
          <option value="Birtouta">Birtouta</option>
        </select>
      </div>
  
      {series[0].data.length > 0 ? (
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
            <Chart options={updatedOptions} series={series} type="bar" height={180} />
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No data available.
        </p>
      )}
    </div>
  );
}
