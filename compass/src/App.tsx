import { Routes, Route, useRoutes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import Matches from "./matches";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { initializeApp } from "firebase/app";
import AuthRoute from "./components/AuthRoute";
import routes from "./Routes";

function App() {
  const content = useRoutes(routes);
  return content;
}

export default App;
