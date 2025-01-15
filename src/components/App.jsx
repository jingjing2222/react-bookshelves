import "@/App.css";
import ReadingBooks from "@/components/ReadingBooks";
import SearchForm from "@/components/Searchform";
import { useState } from "react";
import books from "@/mock/book";
import Bookitem from "@/components/Bookitem";
import Container from "@/components/Container";

function App() {
    const [search, setSearch] = useState("");
    return (
        <>
            <h2>나만의 책장</h2>
            <ReadingBooks />
            <SearchForm setSearch={setSearch} />
            {books.map((book) => (
                <Bookitem key={book.id} book={book} />
            ))}
            <Container />
        </>
    );
}

export default App;
