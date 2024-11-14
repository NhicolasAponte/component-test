"use client";

import { Employee } from "@/lib/definitions";
import { ColumnDef } from "@tanstack/react-table";
import { headers } from "next/headers";
import { Button } from "../ui/button";

export const employeeColumns: ColumnDef<Employee>[] = [
    {
        accessorKey: "full_name",
        header: ({ header }) => {
            return (
                <Button variant={"ghost"}>
                    Name
                </Button>
            )
        }
    },
    {
        accessorKey: "department",
        header: ({ column }) => {
            return (
                <Button variant={"ghost"}>
                    Department
                </Button>
            )
        },
        cell: ({ row }) => {
            return (
                <div>
                    {row.original.department}
                </div>
            )
        }
    },
    {
        accessorKey: "position",
        header: ({ column }) => {
            return (
                <Button variant={"ghost"}>
                    Position
                </Button>
            )
        },
        cell: ({ row }) => {
            return (
                <div>
                    {row.original.position}
                </div>
            )
        }
    },
    {
        accessorKey: "station",
        header: ({ column }) => {
            return (
                <Button variant={"ghost"}>
                    Station
                </Button>
            )
        },
        cell: ({ row }) => {
            return (
                <div>
                    {row.original.station}
                </div>
            )
        }
    },
    {
        accessorKey: "employment_type",
        header: ({ column }) => {
            return (
                <Button variant={"ghost"}>
                    Employment Type
                </Button>
            )
        },
        cell: ({ row }) => {
            return (
                <div>
                    {row.original.employment_type}
                </div>
            )
        }
    },
    {
        accessorKey: "hire_date",
        header: ({ column }) => {
            return (
                <Button variant={"ghost"}>
                    Hire Date
                </Button>
            )
        },
        cell: ({ row }) => {
            return (
                <div>
                    {row.original.hire_date}
                </div>
            )
        }
    }
];