import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";

export default function DestinationDetail() {
  const { currentState, setCurrentState } = useData();
  const {
    name,
    image,
    description,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website,
  } = currentState?.currentDestination;
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl items-center text-center m-5">
        <p className="font-bold text-xl mb-2">{name}</p>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer">
        <img src={image} alt={name} className="w-full h-42 object-cover" />
        <div className="flex flex-col m-5 text-left">
          <p className="text-gray-800 text-base font-bold">{name}</p>
          <span>
            <b>Description:</b> {description}
          </span>
          <span>
            <b>Rating:</b> {ratings}
          </span>
          <span>
            <b>Reviews:</b> {reviews}
          </span>

          <span>
            <b>Location:</b> {location}
          </span>

          <span>
            <b>OpeningHours:</b> {openingHours}
          </span>

          <span>
            <b>TicketPrice:</b> {ticketPrice}
          </span>
          <Link to={website} className="cursor-pointer">
            Website
          </Link>
        </div>
      </div>
    </div>
  );
}
