import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Continents from "./pages/Continents";
import Countries from "./pages/Countries";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/:continent" element={<Countries />} />
        <Route path="/:continent/:country" element={<Destinations />} />
        <Route
          path="/:continent/:country/:destination"
          element={<DestinationDetail />}
        />
      </Routes>
    </div>
  );
}
