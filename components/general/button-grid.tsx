import { Button } from "../ui/button";

export default function ButtonGrid() {
    const buttons = ['glass', 'shape', 'dimensions', 'color'];

    return (
        <div className="grid grid-cols-2 gap-4">
            {buttons.map((button) => (
                <Button key={button}>{button}</Button>
            ))}
        </div>
    );
}