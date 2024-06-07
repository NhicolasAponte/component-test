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
        header: "Order Name",
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