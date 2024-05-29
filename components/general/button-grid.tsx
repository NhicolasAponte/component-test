import { useHelloContext } from "../context/HelloContextProvider";
import { Button } from "../ui/button";

export default function ButtonGrid() {
    const buttons = ['glass', 'shape', 'dimensions', 'color'];
    const { setSummaryCard } = useHelloContext();

    function handleClick(glassType: string) {
        setSummaryCard((prev) => {
            return {
                ...prev,
                orderSpec: {
                    ...prev.orderSpec,
                    glassType: glassType,
                },
            };
        });
    }
    return (
        <div className="grid grid-cols-2 gap-4">
            {buttons.map((button) => (
                <Button key={button} onClick={() => handleClick(button)}>{button}</Button>
            ))}
        </div>
    );
}