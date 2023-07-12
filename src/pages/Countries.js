import { useData } from "../context/DataContext";
import { LocationCard } from "../components/LocationCard";
import { useNavigate, useParams } from "react-router-dom";

export default function Countries() {
  const { location, setLocation } = useData();
  const navigate = useNavigate();
  const { continentName } = useParams();
  console.log(location.allCountries);

  return (
    <div>
      <div className="text-3xl items-center text-center">
        <p className="font-bold text-xl mb-2">
          Top cities in {continentName} for your next Holiday{" "}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {location.allCountries?.map((country) => (
          <div kay={country?.id} onClick={() => navigate(`${country?.name}`)}>
            <LocationCard name={country?.name} image={country?.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
