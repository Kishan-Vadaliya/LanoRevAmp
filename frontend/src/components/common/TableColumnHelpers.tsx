import React from "react";
import { createColumnHelper, CellContext } from "@tanstack/react-table";

interface WithStatus {
  status: string;
}

interface WithName {
  name: string;
}

export const createActionColumn = <T extends WithName>() => {
  const columnHelper = createColumnHelper<T>();

  return columnHelper.display({
    id: "actions",
    header: () => "",
    cell: () => (
      <button
        type="button"
        className="text-gray-400 hover:text-gray-600"
        aria-label="Actions"
      >
        ⋮
      </button>
    ),
  });
};

export const createStatusColumn = <T extends WithStatus>() => {
  const columnHelper = createColumnHelper<T>();

  return columnHelper.accessor("status", {
    id: "status",
    header: () => "STATUS",
    cell: (info: CellContext<T, string>) => {
      const value = info.getValue();
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            value === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      );
    },
  });
};
