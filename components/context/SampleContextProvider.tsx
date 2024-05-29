import { createContext, useContext, useState } from "react";

const SampleContext = createContext<{}>({});

export default function SampleContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    let [sampleState, setSampleState] = useState<{}>({});

    return (
        <SampleContext.Provider value={{ sampleState, setSampleState }}>
            {children}
        </SampleContext.Provider>
    );
}

export function useSampleContext() {
    return useContext(SampleContext);
}