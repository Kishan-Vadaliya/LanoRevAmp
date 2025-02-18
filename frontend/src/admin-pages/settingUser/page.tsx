"use client";
import React, { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import CustomTable from "../../components/CustomTable/CustomTable";

interface User {
  name: string;
  email: string;
  roles: string;
  lastLoginTime: string;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  status: string;
}

const columnHelper = createColumnHelper<User>();

export default function Users() {
  const [data] = useState<User[]>([
    {
      name: "Rohit Kshatriya",
      email: "rohit@redefinesolutions.com",
      roles: "Admin",
      lastLoginTime: "06/05/2024 05:43 AM",
      createdDate: "05/14/2024 05:40 AM",
      createdBy: "Alpesh Prajapati",
      updatedDate: "06/05/2024 05:43 AM",
      updatedBy: "Alpesh Prajapati",
      status: "Active",
    },
    {
      name: "Vishal Rathod",
      email: "vishal@redefinesolutions.com",
      roles: "Super Admin",
      lastLoginTime: "01/08/2025 02:25 AM",
      createdDate: "02/23/2024 06:26 AM",
      createdBy: "Hitesh Nai",
      updatedDate: "01/08/2025 02:25 AM",
      updatedBy: "Hitesh Nai",
      status: "Active",
    },
    // Add more sample data as needed
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredData = data.filter((user) => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === "all" || user.roles === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const columns = [
    columnHelper.accessor("name", {
      header: "NAME",
      cell: (info) => (
        <div className="flex items-center">
          <img 
            src="/no-image.png" 
            alt={info.getValue()} 
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <div>{info.getValue()}</div>
            <div className="text-sm text-gray-500">{info.row.original.email}</div>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("roles", {
      header: "ROLES",
    }),
    columnHelper.accessor("lastLoginTime", {
      header: "LAST LOGIN TIME",
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
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600"
          >
            Invite Users
          </button>
        </div>
      </div>

      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-md flex-grow"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="all">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Super Admin">Super Admin</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="all">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <CustomTable<User> columns={columns} data={filteredData} />
    </div>
  );
}
