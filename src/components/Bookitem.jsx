import { ReadingContext } from "@/contexts/GetReadingBook";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Bookitem({ book }) {
    const { setReadingBook } = useContext(ReadingContext);

    function openBook(e) {
        e.stopPropagation();
        e.preventDefault();
        localStorage.setItem("bookTitle", JSON.stringify(book.title));
        // @ts-ignore
        setReadingBook(JSON.parse(localStorage.getItem("bookTitle")));
    }
    return (
        <>
            <div>
                <Link to={`/books/${book.id}`}>
                    {`${book.title} - ${book.author}`}
                    <button onClick={openBook}>열기</button>
                </Link>
            </div>
        </>
    );
}
