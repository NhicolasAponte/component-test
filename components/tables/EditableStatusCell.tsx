import { use, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Column, Row, Table } from "@tanstack/react-table";
import { Invoice } from "@/lib/definitions";


interface EditableStatusCellProps {
    getValue: () => string;
    row: Row<Invoice>;
    column: Column<Invoice>;
    //meta?: TableMeta<Invoice>;
    //updateData: () => void;
    table: Table<Invoice>;
}

const EditableStatusCell = ({ getValue, row, column, table }: EditableStatusCellProps) => {
    const initialValue = getValue();
    const [cellValue, setCellValue] = useState(initialValue);

    const onBlur = () => {
        table.options.meta?.updateData(row.index, column.id, cellValue);
        //updateData();
    }

    // need to ensure that the cellValue is in sync with the table sate 
    useEffect(() => {
        setCellValue(initialValue);
    }, [initialValue]);
    // need to update the table state when we blur the input 

  return (
    <Input 
        value={cellValue}
        onChange={(e) => setCellValue(e.target.value)}
        onBlur={onBlur}
        
    />
  )
}

export default EditableStatusCell
