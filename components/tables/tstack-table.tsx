"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  TableMeta,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";


interface NewTableMeta<TData> extends TableMeta<TData> {
  updateData: (rowIndex: number, columnId: string, value: string) => void;

}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

// this is an exercise to test and experiment with tanstack table and the functions it provides
export default function TanStackTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [tableData, setTableData] = useState(data);

  //const columns = [...invoiceColumns];

  // console.log(columns)
  //console.log(data)
  // console.log(invoiceColumns)
  console.log(tableData)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    // the following objects should yield the same result, but we'll arbitrarily spread the original object instead of: { ...row, [columnId]: value } 
    meta: {
      updateData: (rowIndex: number, columnId: string, value: string) => 
        setTableData((prev) => {
        return prev.map((row, index) => 
          index === rowIndex ? 
          { ...prev[rowIndex], [columnId]: value } : row
        )
      }),
    },
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
                    <th key={header.id} className="border p-2 pr-1">
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          
                        </div>
                      )}
                      
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
                    <td key={cell.id} width={cell.column.getSize()} className="p-2">
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
