import { RouteObject } from "react-router-dom";
import LandingPage from "./LandingPage";
import MainLayout from "./MainLayout";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Matches from "./matches";
import Checkout from "./components/checkout/Checkout";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/matches",
        element: <Matches />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
];

export default routes;
