import { RouteObject } from "react-router-dom";
import LandingPage from "./LandingPage";
import MainLayout from "./MainLayout";

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            }
        ]
    }
]

export default routes