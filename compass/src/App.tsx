import { useRoutes } from "react-router-dom";
import "./App.css";

import routes from "./Routes";

function App() {
  const content = useRoutes(routes);
  return content;
}

export default App;
