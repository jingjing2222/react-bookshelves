import { ReadingContext } from "@/contexts/GetReadingBook";
import { useContext, useEffect } from "react";

export default function ReadingBooks() {
    const { setReadingBook } = useContext(ReadingContext);

    useEffect(() => {
        // @ts-ignore
        setReadingBook(JSON.parse(localStorage.getItem("bookTitle")));
    }, []);
    const { readingBook } = useContext(ReadingContext);
    return <>{<div>현재 읽고 있는 책 : {readingBook}</div>}</>;
}
