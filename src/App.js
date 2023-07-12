import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Continents from "./pages/Continents";
import Countries from "./pages/Countries";
import Destinations from "./pages/Destinations";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/:continentName" element={<Countries />} />
        <Route path="/:continentName/:countryName" element={<Destinations />} />
      </Routes>
    </div>
  );
}
