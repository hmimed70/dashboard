import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    email: string;
    role: string;
    phoneNumber: string;
  };
  status: string;
  budget?: string; // Optional, as per the "No Budget" update
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/default.jpg",
      name: "Lindsey Curtis",
      email: "lindsey@example.com",
      role: "Admin",
      phoneNumber: "123-456-7890",
    },
    status: "Active",
  },
  {
    id: 2,
    user: {
      image: "/images/user/default.jpg",
      name: "Kaiya George",
      email: "kaiya@example.com",
      role: "User",
      phoneNumber: "987-654-3210",
    },
    status: "Inactive",
  },
  {
    id: 3,
    user: {
      image: "/images/user/default.jpg",
      name: "Zain Geidt",
      email: "zain@example.com",
      role: "Admin",
      phoneNumber: "456-789-1234",
    },
    status: "Active",
  },
  {
    id: 4,
    user: {
      image: "/images/user/default.jpg",
      name: "Abram Schleifer",
      email: "abram@example.com",
      role: "User",
      phoneNumber: "321-654-9870",
    },
    status: "Inactive",
  },
  {
    id: 5,
    user: {
      image: "/images/user/default.jpg",
      name: "Carla George",
      email: "carla@example.com",
      role: "Admin",
      phoneNumber: "159-753-2468",
    },
    status: "Active",
  },
];

export default function BasicTableOne() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  User
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Email
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Role
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Phone Number
                </TableCell>
          
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img src={order.user.image} alt={order.user.name} />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.user.name}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.user.email}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.user.role}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={order.status === "Active" ? "success" : "error"}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.user.phoneNumber}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
