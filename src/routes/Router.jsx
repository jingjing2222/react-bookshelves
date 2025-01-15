import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layout/Layout";
import App from "@/components/App";
import Help from "@/routes/pages/Help";
import BookDetailed from "@/components/Bookdetailed";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "help",
                element: <Help />,
            },
            {
                path: "/books",
                children: [
                    {
                        path: ":bookNumber",
                        element: <BookDetailed />,
                    },
                ],
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
