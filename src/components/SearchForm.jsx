import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
export default function SearchForm({ setSearch }) {
    const { register, handleSubmit } = useForm();

    return (
        <>
            <input
                type="text"
                {...register("bookName")}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        handleSubmit((data) => setSearch(data.bookName))();
                    }
                }}
            />
        </>
    );
}
