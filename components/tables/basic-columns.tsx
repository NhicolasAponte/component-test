"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "my.email@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "some.email@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "test@example.com",
    },
    {
      id: "728ed52i",
      amount: 400,
      status: "failed",
      email: "another.email@email.com",
    },
  ];
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
