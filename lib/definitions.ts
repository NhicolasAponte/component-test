export type SummaryCard = {
  orderName: string;
  orderSpec: SpecificationString;
  glassQuantity: number;
};

export type SpecificationString = {
  glassType: string;
  glassShape: string;
  glassSize: string;
  glassThickness: string;
  glassColor: string;
};

export type ProductNavSections =
  | "Glass Type"
  | "Shape"
  | "Dimensions"
  | "Glass Color";

export type ProductContextType = {
    currentSection: ProductNavSections;
    setCurrentSection: React.Dispatch<React.SetStateAction<ProductNavSections>>;
    summaryCard: SummaryCard;
    setSummaryCard: React.Dispatch<React.SetStateAction<SummaryCard>>;
};