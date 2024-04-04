"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUp, ArrowDown, Check, X } from "lucide-react";
import { Button } from "../ui/button";

export type Tag = {
  name: string;
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
};

const renderIcon = (value: boolean) => {
  return (
    <div className="grid place-items-center">
      {value ? (
        <Check size={18} strokeWidth={1} />
      ) : (
        <X size={18} strokeWidth={1} />
      )}
    </div>
  );
};

export const columns: ColumnDef<Tag>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
  },
  {
    accessorKey: "count",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Count
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
  },
  {
    accessorKey: "has_synonyms",
    header: "Has Synonyms",
    cell: ({ row }) => renderIcon(row.original.has_synonyms),
  },
  {
    accessorKey: "is_moderator_only",
    header: "Is Moderator Only",
    cell: ({ row }) => renderIcon(row.original.is_moderator_only),
  },
  {
    accessorKey: "is_required",
    header: "Is Required",
    cell: ({ row }) => renderIcon(row.original.is_required),
  },
];
