import "@/App.css";
import ReadingBooks from "@/components/ReadingBooks";
import SearchForm from "@/components/Searchform";
import { useState } from "react";

function App() {
    const [search, setSearch] = useState("");
    return (
        <>
            <h2>나만의 책장</h2>
            <ReadingBooks />
            <SearchForm setSearch={setSearch} />
            <div>{search}</div>
        </>
    );
}

export default App;
