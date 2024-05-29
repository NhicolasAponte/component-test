import { ProductContextType, ProductNavSections, SummaryCard } from "@/lib/definitions";
import { createContext, useState } from "react";

export const ProductContext = createContext<ProductContextType>({
    currentSection: "Glass Type",
    setCurrentSection: () => {},
    summaryCard: {
        orderName: "",
        orderSpec: {
            glassType: "",
            glassShape: "",
            glassSize: "",
            glassThickness: "",
            glassColor: "",
        },
        glassQuantity: 0,
    },
    setSummaryCard: () => {},
});

export default function ProductContextProvider({children}: Readonly<{children: React.ReactNode}>) {
    const [currentSection, setCurrentSection] = useState<ProductNavSections>("Glass Type");
    const [summaryCard, setSummaryCard] = useState<SummaryCard>({
        orderName: "",
        orderSpec: {
            glassType: "",
            glassShape: "",
            glassSize: "",
            glassThickness: "",
            glassColor: "",
        },
        glassQuantity: 0,
    });

    return (
        <ProductContext.Provider
            value={{
                currentSection,
                setCurrentSection,
                summaryCard,
                setSummaryCard,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}