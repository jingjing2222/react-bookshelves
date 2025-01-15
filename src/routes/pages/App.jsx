import "@/App.css";
import ReadingBooks from "@/components/ReadingBooks";
import SearchForm from "@/components/Searchform";
import { useState } from "react";
import Container from "@/components/Container";
import { ReadingProvider } from "@/contexts/GetReadingBook";
import BookListBox from "@/components/BookListBox";

function App() {
    const [search, setSearch] = useState("");
    return (
        <>
            <h2>나만의 책장</h2>
            <ReadingProvider>
                <ReadingBooks />
                <SearchForm setSearch={setSearch} />
                <BookListBox search={search} />
            </ReadingProvider>
            <Container />
        </>
    );
}

export default App;
