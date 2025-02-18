import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const CustomTable = ({ columns, data }) => {
  const [filterInput, setFilterInput] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    table.setFilterValue("USER", value);
    setFilterInput(value);
  };

  return (
    <div className="col-span-full w-full bg-white shadow-lg rounded-md mb-8 relative overflow-hidden">
      <div className="w-full">
        {/* Header Controls */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="relative">
      
            </div>
            <div className="relative">
              <input
                value={filterInput}
                onChange={handleFilterChange}
                placeholder="Search"
                className="w-96 px-8 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <span className="absolute left-2.5 top-2.5">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 text-xs text-gray-600 font-medium border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center space-x-1">
              <span>Edit Columns</span>
            </button>
            <button className="px-3 py-1.5 text-xs text-gray-600 font-medium border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center space-x-1">
              <span>Download</span>
            </button>
            <button className="px-3 py-1.5 text-xs text-gray-600 font-medium border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center space-x-1">
              <span>↻</span>
            </button>
            <button className="px-3 py-1.5 text-xs text-gray-600 font-medium border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center space-x-1">
              <span>⭐ Save</span>
            </button>
            <button className="px-3 py-1.5 text-xs text-gray-600 font-medium border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center space-x-1">
              <span>More Filters(0)</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="bg-gray-50 border-b border-gray-200"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-1">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        <span>↕</span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white">
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-3 text-sm text-gray-900 whitespace-nowrap"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              className="px-2 py-1 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value={25}>25 Per Page</option>
              <option value={50}>50 Per Page</option>
              <option value={100}>100 Per Page</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">
              Total Records: {data.length}
            </span>
            <div className="flex items-center space-x-1">
              <button className="px-2 py-1 text-sm font-medium bg-blue-500 text-white rounded">
                1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
