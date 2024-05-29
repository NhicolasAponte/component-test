"use client";
import { SummaryCard } from "@/lib/definitions";
import { createContext, useContext, useState } from "react";

type HelloContextType = {
  summaryCard: SummaryCard;
  setSummaryCard: React.Dispatch<React.SetStateAction<SummaryCard>>;
};

// here define the shape of the shared data, or Context 
// ex: object containing data we want to access in 
// child components, and functions to update the object 
const HelloContext = createContext<HelloContextType>({
  summaryCard: {
    orderName: "test",
    orderSpec: {
      glassType: "a",
      glassShape: "b",
      glassSize: "c",
      glassThickness: "d",
      glassColor: "e",
    },
    glassQuantity: 0,
  },
  setSummaryCard: () => {},
});

export default function HelloContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
    // define the state to be shared with components 
    // initialize the state with a default value whose 
    // structure matches the type of the shared state
    // in this case: SummaryCard
  let [summaryCard, setSummaryCard] = useState<SummaryCard>({
    orderName: "test",
    orderSpec: {
      glassType: "a",
      glassShape: "b",
      glassSize: "c",
      glassThickness: "d",
      glassColor: "e",
    },
    glassQuantity: 0,
  });

  return (
    <HelloContext.Provider value={{ summaryCard, setSummaryCard }}>
      {children}
    </HelloContext.Provider>
  );
}

export function useHelloContext() {
  return useContext(HelloContext);
}
