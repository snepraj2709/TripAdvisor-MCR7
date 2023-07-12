import { useData } from "../context/DataContext";
import { LocationCard } from "../components/LocationCard";
import { useNavigate } from "react-router-dom";

export default function Destinations() {
  const { currentState, setCurrentState } = useData();
  const navigate = useNavigate();
  console.log(currentState);

  return (
    <div>
      <div className="text-3xl items-center text-center m-5">
        <p className="font-medium text-xl mb-2">
          Top cities in {currentState?.currentCountry?.name} for your next
          Holiday{" "}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {currentState.allDestinations?.map((destination) => (
          <div
            key={destination?.id}
            onClick={() => {
              navigate(`${destination.name}`);
              setCurrentState({
                ...currentState,
                currentDestination: destination,
              });
            }}>
            <p>{destination.name}</p>
            <LocationCard name={destination?.name} image={destination?.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
