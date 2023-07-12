import { createContext, useContext, useState } from "react";
import { data } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const continents = data.continents;

  const [currentState, setCurrentState] = useState({
    currentContinent: "",
    allContinents: continents,
    currentCountry: "",
    allCountries: [],
    currentDestination: "",
    allDestinations: [],
  });

  return (
    <DataContext.Provider value={{ currentState, setCurrentState }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
