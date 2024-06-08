import { RouteObject } from "react-router-dom";
import LandingPage from "./LandingPage";
import MainLayout from "./MainLayout";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Matches from "./matches";
import BettingPage from "./BettingPage";
import CompassTokensPage from "./components/compassTokens";

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
        path: "/bettingpage",
        element: <BettingPage />,
      },
      {
        path: "/compasstokens",
        element: <CompassTokensPage />,
      },
    ],
  },
];

export default routes;
