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
import { Announcement } from "@/types/Annoucement.types";

export const columns: ColumnDef<Announcement>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 lg:table-cell">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={cn("rounded-lg p-2 text-start text-lg font-bold capitalize")}
      >
        {row.original.title}
      </div>
    ),
  },
  {
    accessorKey: "client",
    header: ({ column }) => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 lg:table-cell">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            client
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={cn("hidden rounded-lg p-2 text-center capitalize lg:block")}
      >
        {row.original.client}
      </div>
    ),
  },
  {
    accessorKey: "team",
    header: ({ column }) => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 lg:table-cell">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Team member
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={cn("hidden rounded-lg p-2 text-center capitalize lg:block")}
      >
        {row.original.team}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 lg:table-cell">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={cn("hidden rounded-lg p-2 text-start capitalize lg:block")}
      >
        {row.original.date}
      </div>
    ),
  },

  {
    id: "actions",

    header: () => {
      return (
        <div className="flex justify-center font-semibold text-orange-400">
          Actions
        </div>
      );
    },
    cell: ({ row }) => {
      // IMPORTANT THIS IS THE CLIENT DATA FROM WHICH YOU CAN GET THE ID
      const announcement = row.original;

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

            <DropdownMenuItem asChild>
              <Link href={`/announcements/${announcement.id}/editAnnouncement`}>
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/announcements/${announcement.id}/deleteEvent`}>
                Delete
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
