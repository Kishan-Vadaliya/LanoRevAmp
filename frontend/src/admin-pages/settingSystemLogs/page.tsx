'use client'
import React, { useState } from 'react'
import {
  createColumnHelper
} from '@tanstack/react-table'
import CustomTable from '../../components/CustomTable/CustomTable';

interface SystemLog {
  page: string
  moduleName: string
  event: string
  createdBy: string
  date: string
  ipAddress: string
}

const columnHelper = createColumnHelper<SystemLog>()

export default function SystemLogs() {
  const [data] = useState<SystemLog[]>([
    {
      page: 'UserWiseWidget',
      moduleName: 'Users',
      event: 'Updated',
      createdBy: 'Kishan V',
      date: '02/16/2025 08:49 AM',
      ipAddress: '152.58.34.11'
    },
    // Add more data as needed
  ])

  const columns = [
    columnHelper.accessor('page', {
      header: 'PAGE',
    }),
    columnHelper.accessor('moduleName', {
      header: 'MODULE NAME',
    }),
    columnHelper.accessor('event', {
      header: 'EVENT',
    }),
    columnHelper.accessor('createdBy', {
      header: 'CREATED BY',
    }),
    columnHelper.accessor('date', {
      header: 'DATE',
    }),
    columnHelper.accessor('ipAddress', {
      header: 'IP ADDRESS',
    }),
  ]

  return (
    <div>
      <CustomTable columns={columns} data={data} />
    </div>
  );
}