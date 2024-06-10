"use client";
import { Invoice } from "@/lib/definitions";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import EditableCell from "./EditableCell";
import EditableStatusCell from "./EditableStatusCell";

interface ResizeBarProps {
  headerLabel: string;
  isResizing: boolean;
  getResizeHandler: () => (event: React.MouseEvent | React.TouchEvent) => void;
}

function ResizeBar({
  headerLabel,
  getResizeHandler,
  isResizing,
}: ResizeBarProps) {
  return (
    <div className="flex justify-between">
      <p className="text-center w-full">{headerLabel}</p>
      <span
        onMouseDown={getResizeHandler()}
        onTouchStart={getResizeHandler()}
        className={`h-[25px] w-1 border-2 rounded-md hover:cursor-col-resize ${
          isResizing ? "border-blue-500" : "border-slate-400"
        } hover:border-blue-500`}
      />
    </div>
  );
}

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
  // <div onMouseDown={header.getResizeHandler()} onTouchStart={header.getResizeHandler()} className="w-1 border rounded-md top-0 right-0 cursor-col-resize bg-blue-500 hover:opacity-100" />
  {
    accessorKey: "order_name",
    header: ({ header }) => {
      return (
        <div className="flex justify-between">
          <p className="w-full text-center">Order Name</p>
          <span
            onMouseDown={header.getResizeHandler()}
            onTouchStart={header.getResizeHandler()}
            className={`h-[25px] w-1 border-2 rounded-md hover:cursor-col-resize ${
              header.column.getIsResizing()
                ? "border-blue-500"
                : "border-slate-400"
            }  hover:border-blue-500`}
          />
        </div>
      );
    },
    cell: (props) => {
      return <EditableCell value={props.row.getValue("order_name")} />;
    }, // onChange={(value) => props.row.setValue("order_name", value)}
  },
  {
    accessorKey: "amount",
    header: ({ header }) => {
      return (
        <ResizeBar
          headerLabel="Amount"
          getResizeHandler={header.getResizeHandler}
          isResizing={header.column.getIsResizing()}
        />
      );
    },
    cell: ({ row }) => {
      return <p>{row.getValue("amount")}</p>;
    },
  },
  {
    accessorKey: "status",
    header: ({ header }) => {
      return (
        <ResizeBar
          headerLabel="Status"
          getResizeHandler={header.getResizeHandler}
          isResizing={header.column.getIsResizing()}
        />
      );
    },
    // alternate way to invoke a component, though it causes an error:
    //     Type '({ getValue, row, column, table }: EditableStatusCellProps) => JSX.Element' is not assignable to type 'ColumnDefTemplate<CellContext<Invoice, unknown>> | undefined'.
    //   Type '({ getValue, row, column, table }: EditableStatusCellProps) => JSX.Element' is not assignable to type '(props: CellContext<Invoice, unknown>) => any'.
    //     Types of parameters '__0' and 'props' are incompatible.
    //       Type 'CellContext<Invoice, unknown>' is not assignable to type 'EditableStatusCellProps'.
    //         The types returned by 'getValue()' are incompatible between these types.
    //           Type 'unknown' is not assignable to type 'string'.ts(2322)
    // types.d.ts(85, 5): The expected type comes from property 'cell' which is declared here on type 'ColumnDef<Invoice>'
    cell: ({ row, column, table }) => {
      //  updateData={table.options.meta?.updateData} tried passing the function, still get an error: need to define the function in the cell prop somehow
      return (
        <EditableStatusCell
          getValue={() => row.getValue("status")}
          row={row}
          column={column}
          table={table}
        />
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ header }) => {
      return (
        <ResizeBar
          headerLabel="Date"
          getResizeHandler={header.getResizeHandler}
          isResizing={header.column.getIsResizing()}
        />
      );
    },
    cell: ({ row }) => {
      return <p>{row.getValue("date")}</p>;
    },
  },
];
