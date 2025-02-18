"use client";
import React, { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import CustomTable from "../../components/CustomTable/CustomTable";

interface Role {
  name: string;
  description: string;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  status: string;
}

const columnHelper = createColumnHelper<Role>();

export default function Roles() {
  const [data] = useState<Role[]>([
    {
      name: "Super Admin",
      description: "Super Admin has all access",
      createdDate: "05/14/2024 05:40 AM",
      createdBy: "Alpesh Prajapati",
      updatedDate: "06/05/2024 05:43 AM",
      updatedBy: "Alpesh Prajapati",
      status: "Active",
    },
    {
      name: "Admin",
      description: "Admin has limited access",
      createdDate: "02/23/2024 06:26 AM",
      createdBy: "Hitesh Nai",
      updatedDate: "01/08/2025 02:25 AM",
      updatedBy: "Hitesh Nai",
      status: "Active",
    },
  ]);

  const columns = [
    columnHelper.accessor("name", {
      header: "NAME",
      cell: (info) => (
        <div>
          <div className="font-medium">{info.getValue()}</div>
          <div className="text-sm text-gray-500">{info.row.original.description}</div>
        </div>
      ),
    }),
    columnHelper.accessor("createdDate", {
      header: "CREATED DATE",
    }),
    columnHelper.accessor("createdBy", {
      header: "CREATED BY",
    }),
    columnHelper.accessor("updatedDate", {
      header: "UPDATED DATE",
    }),
    columnHelper.accessor("updatedBy", {
      header: "UPDATED BY",
    }),
    columnHelper.accessor("status", {
      header: "STATUS",
      cell: (info) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          info.getValue() === 'Active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("name", {
      header: "",
      id: "actions",
      cell: () => (
        <button className="text-gray-400 hover:text-gray-600">
          ⋮
        </button>
      ),
    }),
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-full">
      <div className="sm:flex sm:items-center mb-6">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Roles</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600"
          >
            Create Roles
          </button>
        </div>
      </div>
      <CustomTable<Role> columns={columns} data={data} />
    </div>
  );
}
