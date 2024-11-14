export type Invoice = {
  customer_id: string;
  order_name: string;
  description: string;
  amount: number;
  status: string;
  date: string;
};

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  department: string; // department name
  position: string; // supervisor, team lead, etc.
  station: string;
  employment_type: string; // regular, part-time, temporary
  hire_date: string;
};

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
