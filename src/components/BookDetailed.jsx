import { useParams } from "react-router-dom";
import books from "@/mock/book";
import { useEffect, useState } from "react";

export default function BookDetailed() {
    const [printInform, setPrintInform] = useState({});
    const { bookNumber } = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        {
            setPrintInform(() => {
                const bookDetailed = books.filter(
                    (book) => book.id === Number(bookNumber)
                )[0];
                setLoading(false);
                return bookDetailed;
            });
        }
    }, [bookNumber]);

    if (loading) return <div>loading</div>;
    return (
        <>
            <h2>{`${printInform["title"]}`}</h2>
            <div>{`저자 - ${printInform["author"]}`}</div>
            <div>{`출판 - ${printInform["publisher"]}  |  ${printInform["year"]}`}</div>
            <div>{`가격 - ${printInform["price"]}`}</div>
        </>
    );
}
