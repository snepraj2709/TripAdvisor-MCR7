import { useData } from "../context/DataContext";
import { LocationCard } from "../components/LocationCard";
import { useNavigate } from "react-router-dom";

export default function Countries() {
  const { location, setLocation } = useData();
  const navigate = useNavigate();
  console.log(location.allCountries);

  return (
    <div>
      <div className="text-3xl items-center text-center m-5">
        <p className="font-medium text-xl mb-2">
          Top cities in {location?.currentContinent?.name} for your next Holiday{" "}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {location.allCountries?.map((country) => (
          <div
            key={country?.id}
            onClick={() => {
              navigate(`${country.name}`);
              setLocation({
                ...location,
                currentCountry: country,
                allDestinations: [...country?.destinations],
              });
            }}>
            <p>{country.name}</p>
            <LocationCard name={country?.name} image={country?.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
