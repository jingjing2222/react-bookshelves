import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
export default function SearchForm({ setSearch }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        if (setSearch) {
            setSearch(data.bookName);
        }
    };

    return (
        <>
            <input
                type="text"
                {...register("bookName")}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        handleSubmit(onSubmit)();
                    }
                }}
            />
        </>
    );
}
