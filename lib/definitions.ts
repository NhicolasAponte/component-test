export type SummaryCard = {
  oderName: string;
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
