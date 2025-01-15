import { createContext, useState } from "react";

export const ReadingContext = createContext({
    readingBook: "",
    setReadingBook: () => {},
});

export function ReadingProvider({ children }) {
    const [readingBook, setReadingBook] = useState("");
    return (
        <ReadingContext.Provider
            // @ts-ignore
            value={{ readingBook, setReadingBook }}
        >
            {children}
        </ReadingContext.Provider>
    );
}
