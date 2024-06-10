import { Input } from "@/components/ui/input";
import { useState } from "react";

interface EditableCellProps {
    value: string;
    onChange?: (value: string) => void;
}
// NOTE TODO: add a onBlur event to update the table state
export default function EditableCell({ value }: EditableCellProps) {
    const [cellValue, setCellValue] = useState(value);

    return (
        <Input value={cellValue} onChange={(e) => 
            setCellValue(e.target.value)
        }>
        </Input>
    )
}