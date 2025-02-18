import React, { useMemo, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

const CustomTable = ({ columns, data }) => {
  const [filterInput, setFilterInput] = useState('');
  const [editedColumns, setEditedColumns] = useState(columns);

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
    table.setFilterValue('USER', value);
    setFilterInput(value);
  };

  const handleEditColumns = (newColumns) => {
    setEditedColumns(newColumns);
  };

  return (
    <div>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search user..."}
      />
      <table {...table.getTableProps()}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {flexRender(
                    column.columnDef.header,
                    column.getContext()
                  )}
                  <span>
                    {column.columnDef.accessorKey && (column.getIsSorted() ? (column.getIsSortedDesc() ? ' 🔽' : ' 🔼') : '')}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...table.getTableBodyProps()}>
          {table.getRowModel().rows.map(row => {
            row.getToggleRowSelectedHandler();
            return (
              <tr {...row.getRowProps()}>
                {row.getVisibleCells().map(cell => (
                  <td {...cell.getCellProps()}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </button>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </button>
        <span>
          Page{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            style={{ width: '100px' }}
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 25, 50, 100].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomTable;