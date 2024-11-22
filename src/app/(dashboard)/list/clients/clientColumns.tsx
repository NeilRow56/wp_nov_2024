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

import { Client } from "@/types/Client.types";

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 lg:table-cell">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={cn("rounded-lg p-2 text-start text-lg font-bold capitalize")}
      >
        {row.original.name}
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 lg:table-cell">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Category
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={cn("hidden rounded-lg p-2 text-start capitalize lg:block")}
      >
        {row.original.category}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="jusify-center flex flex-col font-semibold text-orange-400">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={cn(
          "rounded-lg p-2 text-center capitalize",
          row.original.status === "active" &&
            "bg-emerald-400/10 text-emerald-500",
          row.original.status === "archived" && "bg-red-400/10 text-red-500",
          row.original.status === "stop_work" && "bg-red-400/10 text-red-500",
          row.original.status === "awaiting_ml_checks" &&
            "bg-amber-400/10 text-amber-500",
        )}
      >
        {row.original.status}
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
      const client = row.original;

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
              <Link href={`/dashboard/clients/${client.id}`}>Files</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/clients/${client.id}/editClient`}>
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/clients/${client.id}/deleteClient`}>
                Delete
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
