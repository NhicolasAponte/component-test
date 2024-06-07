import { use, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface EditableStatusCellProps {
    getValue: () => string;

}

const EditableStatusCell = ({ getValue }: EditableStatusCellProps) => {
    const initialValue = getValue();
    const [cellValue, setCellValue] = useState(initialValue);

    // need to ensure that the cellValue is in sync with the table sate 
    useEffect(() => {
        setCellValue(initialValue);
    }, [initialValue]);
    // need to update the table state when we blur the input 

  return (
    <Input 
        value={cellValue}
        onChange={(e) => setCellValue(e.target.value)}
    />
  )
}

export default EditableStatusCell
