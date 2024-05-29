'use client';
import { createContext, useContext, useState } from "react";

type HelloContextType = {
    hello: string;
};

const HelloContext = createContext<any>(undefined);

export default function HelloContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    let [helloState, setHelloState] = useState<any>("Hello, World!");

    return (
        <HelloContext.Provider value={{ helloState, setHelloState }}>
            {children}
        </HelloContext.Provider>
    );
}

export function useHelloContext() {
    return useContext(HelloContext);
}