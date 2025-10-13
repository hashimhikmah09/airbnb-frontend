import { useState } from "react";

const InspirationSection = () => {
  const [activeTab, setActiveTab] = useState("travel");

  const travelTips = [
    { title: "Family travel hub", desc: "Tips and inspiration" },
    { title: "Family budget travel", desc: "Get there for less" },
    { title: "Vacation ideas for any budget", desc: "Make it special without making it expensive" },
    { title: "Travel Europe on a budget", desc: "How to take the kids to Europe affordably" },
    { title: "Outdoor adventure", desc: "Explore nature with the family" },
    { title: "Bucket list national parks", desc: "Must-see parks for family travel" },
  ];

  const apartments = [
    { title: "Pet-friendly stays", desc: "Bring your furry friends" },
    { title: "Beachfront homes", desc: "Wake up to ocean views" },
    { title: "Mountain cabins", desc: "Escape to the wild" },
    { title: "Unique stays", desc: "Treehouses, boats & more" },
    { title: "Luxury retreats", desc: "Relax in style" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ===== Header ===== */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Inspiration for future getaways
        </h2>

        {/* ===== Tabs ===== */}
        <div className="flex gap-6 border-b border-gray-300 mb-8 text-sm font-medium text-gray-700">
          <button
            onClick={() => setActiveTab("travel")}
            className={`pb-2 ${
              activeTab === "travel"
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Travel tips & inspiration
          </button>
          <button
            onClick={() => setActiveTab("apartments")}
            className={`pb-2 ${
              activeTab === "apartments"
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Airbnb-friendly apartments
          </button>
        </div>

        {/* ===== Tab Content ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === "travel" ? travelTips : apartments).map((item, index) => (
            <div key={index} className="flex flex-col space-y-1 cursor-pointer">
              <h3 className="text-base font-semibold text-gray-900 hover:underline">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
