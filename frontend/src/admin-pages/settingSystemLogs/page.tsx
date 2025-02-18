"use client";
import React, { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import CustomTable from "../../components/CustomTable/CustomTable";
import PageLayout from "../../components/common/PageLayout";
import TableFilters from "../../components/common/TableFilters";

interface SystemLog {
  page: string;
  moduleName: string;
  event: string;
  createdBy: string;
  date: string;
  ipAddress: string;
}

const columnHelper = createColumnHelper<SystemLog>();

export default function SystemLogs() {
  const [data] = useState<SystemLog[]>([
    {
      page: "UserWiseWidget",
      moduleName: "Users",
      event: "Updated",
      createdBy: "Kishan V",
      date: "02/16/2025 08:49 AM",
      ipAddress: "152.58.34.11",
    },
    {
      page: "UserWiseWidget",
      moduleName: "Users",
      event: "Updated",
      createdBy: "Dhrumisha R",
      date: "02/16/2025 08:49 AM",
      ipAddress: "152.58.34.12",
    },
    {
      page: "UserWiseWidget",
      moduleName: "Users",
      event: "Updated",
      createdBy: "Vatsal P",
      date: "02/16/2025 08:49 AM",
      ipAddress: "152.58.34.13",
    },
    {
      page: "UserWiseWidget",
      moduleName: "Users",
      event: "Updated",
      createdBy: "Jatin D",
      date: "02/16/2025 08:49 AM",
      ipAddress: "152.58.34.14",
    },
    {
      page: "UserWiseWidget",
      moduleName: "Users",
      event: "Updated",
      createdBy: "Jay C",
      date: "02/16/2025 08:49 AM",
      ipAddress: "152.58.34.15",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [moduleFilter, setModuleFilter] = useState("all");
  const [eventFilter, setEventFilter] = useState("all");

  const filteredData = data.filter((log) => {
    const matchesSearch =
      log.page.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.createdBy.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesModule =
      moduleFilter === "all" || log.moduleName === moduleFilter;
    const matchesEvent = eventFilter === "all" || log.event === eventFilter;

    return matchesSearch && matchesModule && matchesEvent;
  });

  const columns = [
    columnHelper.accessor("page", {
      header: "PAGE",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("moduleName", {
      header: "MODULE NAME",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("event", {
      header: "EVENT",
      cell: (info) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            info.getValue() === "Updated"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("createdBy", {
      header: "CREATED BY",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
      header: "DATE",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ipAddress", {
      header: "IP ADDRESS",
      cell: (info) => info.getValue(),
    }),
  ];

  return (
    <PageLayout title="System Logs">
      <TableFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search by page or user..."
        filters={{
          module: {
            value: moduleFilter,
            onChange: setModuleFilter,
            label: "All Modules",
            options: [
              { value: "Users", label: "Users" },
              { value: "Roles", label: "Roles" },
              { value: "Settings", label: "Settings" },
            ],
          },
          event: {
            value: eventFilter,
            onChange: setEventFilter,
            label: "All Events",
            options: [
              { value: "Updated", label: "Updated" },
              { value: "Created", label: "Created" },
              { value: "Deleted", label: "Deleted" },
            ],
          },
        }}
      />
      <CustomTable<SystemLog> columns={columns} data={filteredData} />
    </PageLayout>
  );
}
