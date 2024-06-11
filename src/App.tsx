import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AIGEN from "./pages/AIGEN";
import "./index.css";
import "animate.css/animate.compat.css";
function App() {
  return (
    <>
      <AIGEN />
    </>
  );
}
export default App;
