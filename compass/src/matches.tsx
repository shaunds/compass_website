import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import Matches from "./matches";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/matches" element={<Matches />} />
    </Routes>
  );
}

export default App;