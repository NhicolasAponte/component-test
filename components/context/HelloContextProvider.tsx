'use client';
import { createContext, useContext, useState } from "react";

type HelloContextType = {
    hello: string;
};

const HelloContext = createContext<HelloContextType>({hello: ""});

export default function HelloContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    let [sampleState, setSampleState] = useState<HelloContextType>({hello: "Hello, World!"});

    return (
        <HelloContext.Provider value={sampleState}>
            {children}
        </HelloContext.Provider>
    );
}

export function useHelloContext() {
    return useContext(HelloContext);
}