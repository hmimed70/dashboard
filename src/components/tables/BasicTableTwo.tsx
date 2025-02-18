
  import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";

interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const activities: Activity[] = [
    {
      id: 1,
      title: "Waste Collection Initiative",
      description: "A community-driven event focused on collecting and managing waste for a cleaner environment.",
      image: "/images/activity/waste-collection.jpg",
      date: "2024-02-10",
    },
    {
      id: 2,
      title: "Street Cleaning Drive",
      description: "Volunteers come together to clean streets and public areas, ensuring a tidy city.",
      image: "/images/activity/street-cleaning.jpg",
      date: "2024-02-15",
    },
    {
      id: 3,
      title: "Public Space Maintenance",
      description: "Engaging in maintaining parks and public spaces to promote a greener environment.",
      image: "/images/activity/public-space.jpg",
      date: "2024-02-20",
    },
    {
      id: 4,
      title: "Beach Cleanup Day",
      description: "A large-scale cleanup of beaches to reduce pollution and protect marine life.",
      image: "/images/activity/beach-cleanup.jpg",
      date: "2024-02-25",
    },
    {
      id: 5,
      title: "Neighborhood Cleanup Campaign",
      description: "Residents unite to clean their neighborhoods and raise awareness about waste management.",
      image: "/images/activity/neighborhood-cleanup.jpg",
      date: "2024-03-05",
    },
  ];

export default function BasicTableTwo() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[900px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Title
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Description
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Image
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Date
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {activities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="px-5 py-4 text-start font-medium text-gray-800 text-theme-sm dark:text-white/90">
                    {activity.title}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500 text-theme-sm dark:text-gray-400">
                    {activity.description}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500 text-theme-sm dark:text-gray-400">
                    {activity.date}
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