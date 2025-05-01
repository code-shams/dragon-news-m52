import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home/Home";
import CategoryNews from "../Pages/CatergoryNews/CategoryNews";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                loader: () => fetch("/news.json"),
                Component: Home,
            },
            {
                path: "category/:id",
                loader: () => fetch("/news.json"),
                Component: CategoryNews,
            },
        ],
    },
]);
