import { MapPin, Landmark, Building2, Trees, Mountain } from "lucide-react";

interface Destination {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const destinations: Destination[] = [
  {
    name: "Nearby",
    description: "Find what’s around you",
    icon: <MapPin className="text-blue-500 w-5 h-5" />,
  },
  {
    name: "London, United Kingdom",
    description: "Because your wishlist has stays in London",
    icon: <Landmark className="text-gray-600 w-5 h-5" />,
  },
  {
    name: "Lekki, Nigeria",
    description: "For its seaside allure",
    icon: <Building2 className="text-pink-500 w-5 h-5" />,
  },
  {
    name: "Toronto, Canada",
    description: "For sights like CN Tower",
    icon: <Trees className="text-green-500 w-5 h-5" />,
  },
  {
    name: "Mississauga, Canada",
    description: "Peaceful lakefront views",
    icon: <Mountain className="text-indigo-500 w-5 h-5" />,
  },
  {
    name: "Toronto, Canada",
    description: "For sights like CN Tower",
    icon: <Trees className="text-green-500 w-5 h-5" />,
  },
   {
    name: "Lekki, Nigeria",
    description: "For its seaside allure",
    icon: <Building2 className="text-pink-500 w-5 h-5" />,
  },
   {
    name: "Lekki, Nigeria",
    description: "For its seaside allure",
    icon: <Building2 className="text-pink-500 w-5 h-5" />,
  },
];

const WhereDropdown: React.FC = () => {
  return (
    <div
      className="
        absolute top-full left-0 mt-3 z-[999]
        bg-white border border-gray-100 shadow-xl
        w-[400px] max-h-[400px] rounded-xl
        overflow-y-auto scrollbar-custom
        p-4
      "
    >
      <h3 className="text-sm mb-3">Suggested destinations</h3>
      <div className="flex flex-col gap-2">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl cursor-pointer transition"
          >
            <div className="bg-gray-100 p-2 rounded-lg">{dest.icon}</div>
            <div>
              <p className="font-medium text-gray-800">{dest.name}</p>
              <p className="text-sm text-gray-500">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhereDropdown;
