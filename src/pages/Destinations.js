import { useData } from "../context/DataContext";
import { LocationCard } from "../components/LocationCard";
import { useNavigate } from "react-router-dom";

export default function Destinations() {
  const { location, setLocation } = useData();
  const navigate = useNavigate();
  console.log(location);

  return (
    <div>
      <div className="text-3xl items-center text-center m-5">
        <p className="font-medium text-xl mb-2">
          Top cities in {location?.currentCountry?.name} for your next Holiday{" "}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {location.allDestinations?.map((destination) => (
          <div
            key={destination?.id}
            onClick={() => {
              navigate(`${destination.name}`);
              setLocation({
                ...location,
                currentCountry: destination,
                allDestinations: [destination?.destinations],
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
