import { RouteObject } from "react-router-dom";
import LandingPage from "./LandingPage";
import MainLayout from "./MainLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Matches from "./matches";

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/matches",
                element: <Matches />
            },
        ]
    }
]

export default routes