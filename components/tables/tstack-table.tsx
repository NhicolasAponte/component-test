"use client";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react"
import { invoices } from "@/lib/placeholder-data"
import { invoiceColumns } from "./invoice-columns";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

// this is an exercise to test and experiment with tanstack table and the functions it provides  
export default function TanStackTable(){
    const [data, setData] = useState(invoices);

    const columns = [...invoiceColumns];

    // console.log(columns)
    // console.log(data)
    // console.log(invoiceColumns)

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="table">
            {table.getHeaderGroups().map((headerGroup) => {
                return (
                <div key={headerGroup.id} className="flex">
                    {headerGroup.headers.map((header) => {
                        return (
                        <div key={header.id} className="border p-2">
                            {header.isPlaceholder ? null 
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </div>
                        )
                    })}
                </div>
                )
            })}
            {
                table.getRowModel().rows.map((row) => {
                    return (
                        <div key={row.id}>
                            {row.getVisibleCells().map((cell) => {})}
                        </div>
                    );
                })
            }
        </div>
    )
}