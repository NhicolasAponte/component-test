"use client";
import { Invoice } from "@/lib/definitions";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export const invoiceColumns: ColumnDef<Invoice>[] = [
    // 'accessoryKey' corresponds to the fields in the type you are using 
    // 'header' is the column name; it can take a string or a react component 
    // 'cell' refers to each cell in each row, it's nullable; takes a function
    // function def from tanstack-table: cell?: ((props: {
    //  table: Table<TData>
    //  row: Row<TData>
    //  column: Column<TData>
    //  cell: Cell<TData>
    //  getValue: () => any 
    //  renderValue: () => any
    // }) => unknown)
    {
        accessorKey: "order_name",
        header: ({ header }) => {
            return (
                <div className="flex justify-between">
                    <p>Order Name</p>
                    <div onMouseDown={header.getResizeHandler()} onTouchStart={header.getResizeHandler()} className="h-[25px] w-1 border-2 rounded-md cursor-col-resize border-black hover:border-blue-500"/>
                    <div onMouseDown={header.getResizeHandler()} onTouchStart={header.getResizeHandler()} className="h-[25px] w-1 border rounded-md cursor-col-resize bg-blue-500 hover:opacity-100" />
                </div>
            )
        
        },
        cell: (props) => {
            return (
            <p>
                {props.row.getValue("order_name")}
            </p>
            )
        }
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            return (
            <p>
                {row.getValue("amount")}
            </p>
            )
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return (
                <p>
                    {row.getValue("status")}
                </p>
                )
        }
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => {
            return (
                <p>
                    {row.getValue("date")}
                </p>
                )
        }
    },
]; 