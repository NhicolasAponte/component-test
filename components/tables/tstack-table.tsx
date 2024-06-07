"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

// this is an exercise to test and experiment with tanstack table and the functions it provides
export default function TanStackTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  //const [data, setData] = useState(invoices);

  //const columns = [...invoiceColumns];

  // console.log(columns)
  // console.log(data)
  // console.log(invoiceColumns)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="">
      <table className="" width={table.getTotalSize()}>
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} className="border p-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          <div className="absolute h-full w-[5px] cursor-col-resize border">

                          </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody className="border">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="border-b text-center">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} width={cell.column.getSize()}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
