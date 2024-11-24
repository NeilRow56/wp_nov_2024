"use client";

import { cn } from "@/lib/utils";
import { Manager } from "@/types/Manager.types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
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
import NumberFormat from "@/components/shared/NumberFormat";

export const columns: ColumnDef<Manager>[] = [
  {
    accessorKey: "name",
    header: () => {
      return (
        <div className="flex justify-start pl-4 font-semibold text-orange-400">
          Name
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center p-1">
        <Image
          src={row.original.photo}
          alt=""
          width={40}
          height={40}
          className="mr-4 h-10 w-10 rounded-full object-cover md:hidden xl:block"
        />
        <div>{row.original.name}</div>
      </div>
    ),
    footer: "Total",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 lg:table-cell">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className={cn("rounded-lg p-2 text-start capitalize")}>
        {row.original.email}
      </div>
    ),
  },
  {
    accessorKey: "managerId",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          Manager ID
        </div>
      );
    },
  },
  {
    accessorKey: "clients",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          Clients
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: () => {
      return (
        <div className="flex justify-end pr-4 font-semibold text-orange-400">
          Phone
        </div>
      );
    },
    cell: ({ row }) => (
      <div className={cn("rounded-lg bg-green-100 p-2 text-right capitalize")}>
        <NumberFormat amount={row.original.phone} />
      </div>
    ),

    footer: (props) => {
      const totalBalance = props.table
        .getRowModel()
        .rows.reduce((sum, phoneRow) => sum + phoneRow.original.phone, 0);
      return (
        <div className="pr-2 text-right font-semibold">
          <NumberFormat amount={totalBalance} />
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: () => {
      return (
        <div className="flex justify-start font-semibold text-orange-400">
          Actions
        </div>
      );
    },
    cell: ({ row }) => {
      // IMPORTANT THIS IS THE MANAGER DATA FROM WHICH YOU CAN GET THE ID
      const manager = row.original;

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
              <Link href={`/list/managers/${manager.managerId}`}>Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`list/managers/${manager.id}/deleteManager`}>
                Delete
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
