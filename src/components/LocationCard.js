import { MdLocationPin } from "react-icons/md";

export function LocationCard({ name, image }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl">
      <img src={image} alt={name} className="w-full h-42 object-cover" />
      <div className="flex items-center mt-2">
        <MdLocationPin className="text-gray-500 mr-2" />
        <p className="text-gray-500 text-base">{name}</p>
      </div>
    </div>
  );
}