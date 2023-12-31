import { useData } from "../context/DataContext";
import { LocationCard } from "../components/LocationCard";
import { useNavigate } from "react-router-dom";

export default function Continents() {
  const { currentState, setCurrentState } = useData();
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-3xl items-center text-center m-5">
        <p className="font-bold text-xl mb-2">Welcome to Trip Advisor</p>
        <p className="text-gray-700 text-base">
          Top continents for your next Holiday
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {currentState.allContinents.map((continent) => (
          <div
            key={continent?.id}
            onClick={() => {
              navigate(`/${continent.name}`);
              setCurrentState({
                ...currentState,
                currentContinent: continent,
                allCountries: [...continent?.countries],
              });
            }}>
            <LocationCard name={continent?.name} image={continent.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
