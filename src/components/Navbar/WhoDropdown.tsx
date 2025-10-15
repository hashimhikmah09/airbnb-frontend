import React from "react";

interface Guests {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

interface WhoDropdownProps {
  guests: Guests;
  setGuests: (guests: Guests) => void;
}

const WhoDropdown: React.FC<WhoDropdownProps> = ({ guests, setGuests }) => {
  const increment = (type: keyof Guests) => {
    setGuests({ ...guests, [type]: guests[type] + 1 });
  };

  const decrement = (type: keyof Guests) => {
    if (guests[type] > 0) {
      setGuests({ ...guests, [type]: guests[type] - 1 });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-[400px] max-w-[95vw]">
      {[
        { label: "Adults", key: "adults", description: "Ages 13+" },
        { label: "Children", key: "children", description: "Ages 2-12" },
        { label: "Infants", key: "infants", description: "Under 2" },
        { label: "Pets", key: "pets", description: "Bringing a service animal?" },
      ].map((item) => (
        <div key={item.key} className="flex flex-col">
          <div className="flex justify-between items-center py-3">
            <div>
              <div className="text-gray-900 font-medium">{item.label}</div>
              {item.description && (
                <div
                  className={`text-sm ${
                    item.key === "pets" ? "text-black underline cursor-pointer" : "text-gray-500"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.description}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  decrement(item.key as keyof Guests);
                }}
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
              >
                -
              </button>
              <span className="w-5 text-center">{guests[item.key as keyof Guests]}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  increment(item.key as keyof Guests);
                }}
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhoDropdown;
