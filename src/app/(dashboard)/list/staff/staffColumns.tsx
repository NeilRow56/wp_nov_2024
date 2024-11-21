"use client";

import { cn } from "@/lib/utils";

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
import { Staff } from "@/types/Staff.types";

export const columns: ColumnDef<Staff>[] = [
  {
    accessorKey: "info",
    header: () => {
      return (
        <div className="flex justify-start pl-4 font-semibold text-orange-400">
          Info
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex p-1">
        <Image
          src={row.original.photo}
          alt=""
          width={40}
          height={40}
          className="mr-4 h-10 w-10 rounded-full object-cover md:hidden xl:block"
        />
        <div className="flex flex-col">
          <div>{row.original.name}</div>
          <div>{row.original.email}</div>
        </div>
      </div>
    ),
    footer: "Total",
  },
  {
    accessorKey: "studentId",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          Team ID
        </div>
      );
    },
  },
  {
    accessorKey: "grade",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          Grade
        </div>
      );
    },
  },
  {
    accessorKey: "class",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          Class
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
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 lg:table-cell">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Address
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
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
      // IMPORTANT THIS IS THE STAFF DATA FROM WHICH YOU CAN GET THE ID
      const staff = row.original;

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
              <Link href={`/manager/${staff.id}`}>Files</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/manager/${staff.id}/editClient`}>Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/manager/${staff.id}/deleteClient`}>Delete</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
