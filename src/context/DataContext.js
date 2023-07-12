import { createContext, useContext, useState } from "react";
import { data } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const continents = data.continents;

  const [location, setLocation] = useState({
    currentContinent: "",
    allContinents: continents,
    currentCountry: "",
    allCountries: [],
    currentDestination: "",
    allDestinations: [],
  });

  return (
    <DataContext.Provider value={{ location, setLocation }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
