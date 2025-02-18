import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Submission {
  id: number;
  name: string;
  email: string;
  type: "Suggestion" | "Concern";
  date: string;
  description: string;
}

const submissions: Submission[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      type: "Suggestion",
      date: "2024-02-18",
      description: "Implement more frequent street sweeping in residential areas to maintain cleanliness.",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      type: "Concern",
      date: "2024-02-17",
      description: "There is an accumulation of trash near the park. It should be cleaned regularly to avoid odors.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      type: "Suggestion",
      date: "2024-02-16",
      description: "Add a system for reporting areas that need street cleaning on the website or app.",
    },
  ];
   

export default function BasicTbleThree() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[900px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell className="px-5 py-3 font-medium text-gray-500 text-start dark:text-gray-400">
                  Name
                </TableCell>
                <TableCell className="px-5 py-3 font-medium text-gray-500 text-start dark:text-gray-400">
                  Email
                </TableCell>
                <TableCell className="px-5 py-3 font-medium text-gray-500 text-start dark:text-gray-400">
                  Type
                </TableCell>
                <TableCell className="px-5 py-3 font-medium text-gray-500 text-start dark:text-gray-400">
                  Date
                </TableCell>
                <TableCell className="px-5 py-3 font-medium text-gray-500 text-start dark:text-gray-400">
                  Description
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="px-5 py-4 text-start font-medium text-gray-800 dark:text-white/90">
                    {submission.name}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500 dark:text-gray-400">
                    {submission.email}
                  </TableCell>
                  <TableCell
                    className={`px-5 py-4 text-start font-medium ${
                      submission.type === "Suggestion"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {submission.type}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500 dark:text-gray-400">
                    {submission.date}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-gray-500 dark:text-gray-400">
                    {submission.description}
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
