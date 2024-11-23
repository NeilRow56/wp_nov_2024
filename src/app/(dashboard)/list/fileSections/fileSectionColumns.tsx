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
import { FileSection } from "@/types/FileSection.types";

export const columns: ColumnDef<FileSection>[] = [
  {
    accessorKey: "index",
    header: () => {
      return (
        <div className="flex justify-start pl-4 font-semibold text-orange-400">
          Index
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center p-1">
        <div>{row.original.index}</div>
      </div>
    ),
  },
  {
    accessorKey: "section",
    header: ({ column }) => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 lg:table-cell">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Section
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className={cn("rounded-lg p-2 text-start capitalize")}>
        {row.original.section}
      </div>
    ),
  },
  {
    accessorKey: "subsectionIndex",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          Subsection Index
        </div>
      );
    },
  },
  {
    accessorKey: "subsectionNarrative",
    header: () => {
      return (
        <div className="hidden justify-start font-semibold text-orange-400 md:table-cell">
          Subsection Narrative
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
      const fileSection = row.original;

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
              <Link href={`/manager/${manager.id}`}>Files</Link>
            </DropdownMenuItem> */}
            <DropdownMenuItem asChild>
              <Link href={`/fileSection/${fileSection.id}/editfileSection`}>
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/fileSection/${fileSection.id}/deletefileSection`}>
                Delete
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
