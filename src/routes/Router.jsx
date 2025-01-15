import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layout/Layout";
import App from "@/components/App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <App />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
