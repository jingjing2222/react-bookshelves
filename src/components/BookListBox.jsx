import BookItem from "@/components/Bookitem";
import books from "@/mock/book";

export default function BookListBox({ search }) {
    return (
        <>
            {(search
                ? // @ts-ignore
                  books.filter((book) => book.title.includes(search))
                : books
            ).map((book) => (
                <BookItem key={book.id} book={book} />
            ))}
        </>
    );
}
