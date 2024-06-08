import { Routes, Route, useRoutes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import Matches from "./matches";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { initializeApp } from "firebase/app";
import { config } from "./components/config";
import AuthRoute from "./components/AuthRoute";
import routes from "./Routes";

initializeApp(config.firebaseConfig);

function App() {
  const content = useRoutes(routes);
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/matches" element={<Matches />} />
 
      <Route path="/signUp" element={<SignUp />} />


    </Routes>
  );
}

export default App;