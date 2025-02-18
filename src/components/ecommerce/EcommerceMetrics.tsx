import React from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  ShootingStarIcon,
  GroupIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";
import { DairaData, dairaData } from "../../data/index";

// Utility function to calculate total sum
const calculateTotal = (data: number[]): number => {
  return data.reduce((acc, val) => acc + val, 0);
};

type MetricItemProps = {
  label: string;
  count: number;
  icon: React.ReactNode;
  isPositive: boolean;
};

const MetricItem: React.FC<MetricItemProps> = ({ label, count, icon, isPositive }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
        {icon}
      </div>

      <div className="flex items-end justify-between mt-5">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">{count}</h4>
        </div>
      </div>
    </div>
  );
};

export default function EcommerceMetrics() {
  // Calculate the total sum for all daïra data
  const totalCount = Object.values(dairaData).flat().reduce((acc, val) => acc + val, 0);

  // Find the daïra with the most orders
  const dairaWithMostOrders = Object.keys(dairaData).reduce((maxDaira, daira) => {
    const count = calculateTotal(dairaData[daira as keyof DairaData]);
    return count > (maxDaira.count || 0) ? { daira, count } : maxDaira;
  }, { daira: "", count: 0 });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* Metric Item for Total Orders */}
      <MetricItem
        label="Total Count"
        count={totalCount}
        icon={<BoxIconLine className="text-gray-800 dark:text-white/90" />}
        isPositive={true} // Always positive, since we're showing the total count
      />

      {/* Metric Item for Daïra with Most Orders */}
      <MetricItem
        label={`Top - ${dairaWithMostOrders.daira}`}
        count={dairaWithMostOrders.count}
        icon={<ShootingStarIcon className="text-gray-800 size-6 dark:text-white/90" />}
        isPositive={true} // Always positive for the most orders
      />
    </div>
  );
}
