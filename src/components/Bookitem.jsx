import { Link } from "react-router-dom";

export default function Bookitem({ book }) {
    return (
        <>
            <div>
                <Link to={`/books/${book.id}`}>
                    {`${book.title} - ${book.author}`}
                    <button>열기</button>
                </Link>
            </div>
        </>
    );
}
