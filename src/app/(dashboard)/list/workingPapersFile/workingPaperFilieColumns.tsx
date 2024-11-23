"use client";

import { cn } from "@/lib/utils";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { WorkingPapers } from "@/types/WorkingPapersFile.types";

export const columns: ColumnDef<WorkingPapers>[] = [
  {
    accessorKey: "client",
    header: ({ column }) => {
      return (
        <div className="table-cell justify-start font-semibold text-orange-400">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Client
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className={cn("rounded-lg p-2 text-start capitalize")}>
        {row.original.client}
      </div>
    ),
  },
  {
    accessorKey: "manager",
    header: ({ column }) => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Manager
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={cn("hidden rounded-lg p-2 text-start capitalize md:block")}
      >
        {row.original.manager}
      </div>
    ),
  },
  {
    accessorKey: "periodEndDate",
    header: ({ column }) => {
      return (
        <div className="table-cell justify-start font-semibold text-orange-400">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Period ending
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className={cn("rounded-lg p-2 text-start capitalize")}>
        {row.original.periodEndDate}
      </div>
    ),
  },

  {
    accessorKey: "actions",
    header: () => {
      return (
        <div className="flex justify-center font-semibold text-orange-400">
          Actions
        </div>
      );
    },
    cell: ({ row }) => {
      // IMPORTANT THIS IS THE STAFF DATA FROM WHICH YOU CAN GET THE ID
      const workingPapersFile = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex justify-center">
              <Button size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem asChild>
              <Link href={`/manager/${staff.id}`}>Files</Link>
            </DropdownMenuItem> */}
            <DropdownMenuItem asChild>
              <Link
                href={`/workingPapersFile/${workingPapersFile.id}/editworkingPapersFile`}
              >
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href={`/workingPapersFile/${workingPapersFile.id}/deleteworkingPapersFile`}
              >
                Delete
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
