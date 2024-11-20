"use client";

import MoneyWithCurrency from "@/components/shared/CurrencyFormat";
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
import { MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<Manager>[] = [
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
      <div className="flex p-2">
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
    accessorKey: "teacherId",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          Teacher ID
        </div>
      );
    },
  },
  {
    accessorKey: "subjects",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          Subjects
        </div>
      );
    },
  },
  {
    accessorKey: "classes",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          Classes
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
        <MoneyWithCurrency amount={row.original.phone} />
      </div>
    ),
    footer: (props) => {
      const totalBalance = props.table
        .getRowModel()
        .rows.reduce((sum, phoneRow) => sum + phoneRow.original.phone, 0);
      return (
        <div className="pr-2 text-right font-semibold">
          <MoneyWithCurrency amount={totalBalance} />
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 lg:table-cell">
          Address
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
      // IMPORTANT THIS IS THE CLIENT DATA FROM WHICH YOU CAN GET THE ID
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
              <Link href={`/manager/${manager.id}`}>Files</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/manager/${manager.id}/editClient`}>Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/manager/${manager.id}/deleteClient`}>Delete</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
