import { MdLocationPin } from "react-icons/md";

// export function LocationCard({ name, image }) {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer">
//       <img src={image} alt={name} className="w-42 h-42 object-cover" />
//       <div className="flex items-center mt-2">
//         <MdLocationPin className="text-gray-500  w-4 h-4 m-3" />
//         <p className="text-gray-500 text-base font-bold m-5">{name}</p>
//       </div>
//     </div>
//   );
// }

export function LocationCard({ name, image }) {
  return (
    <div className="max-w-card rounded overflow-hidden shadow-xl cursor-pointer w-full sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 m-10">
      <img
        src={image}
        alt={name}
        className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
      />
      <div className="flex items-center mt-2">
        <MdLocationPin className="text-gray-500 w-4 h-4 m-3" />
        <p className="text-gray-500 text-base font-bold">{name}</p>
      </div>
    </div>
  );
}
