import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layout/Layout";
import App from "@/components/App";
import Help from "@/routes/pages/Help";

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
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
