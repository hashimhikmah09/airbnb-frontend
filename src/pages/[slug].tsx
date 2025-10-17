import { useParams } from "react-router-dom";
import { properties } from "../components/data/properties";
import { useState } from "react";
import { Grid } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const PropertyDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = properties.find((p) => p.slug === slug);
  
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  if (!property) {
    return <div className="text-center text-red-500 mt-10">Property not found</div>;
  }

  const displayedImages = showAll ? property.images : property.images.slice(0, 5);

  const center: LatLngExpression = [property.location.lat, property.location.lng];

  return (
    <div className="max-w-6xl mx-auto  mt-5 md:mt-44 sm:mt-10 px-4">
      {/* Subtitle */}
      {property.subtitle && <h2 className="text-2xl font-bold mb-4 mt-5">{property.subtitle}</h2>}

      {/* ===== Gallery Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">
        {/* Left big image */}
        {displayedImages[0] && (
          <div
            className="cursor-pointer overflow-hidden rounded-l-2xl md:col-span-2 md:row-span-2 h-80 md:h-96"
            onClick={() => setLightboxIndex(0)}
          >
            <img
              src={displayedImages[0]}
              alt={`Image 1`}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        )}

        {/* Right 4 images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:col-span-2 h-80 md:h-96">
          {displayedImages.slice(1, 5).map((img, i) => {
            let roundedClass = "";
            if (i === 1) roundedClass = "rounded-tr-2xl"; // top-right
            if (i === 3) roundedClass = "rounded-br-2xl"; // bottom-right

            return (
              <div
                key={i + 1}
                className={`cursor-pointer overflow-hidden ${roundedClass}`}
                onClick={() => setLightboxIndex(i + 1)}
              >
                <img
                  src={img}
                  alt={`Image ${i + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            );
          })}
        </div>

        {/* Show all button */}
        {!showAll && property.images.length > 5 && (
          <button
            className="absolute flex items-center gap-2 bottom-4 right-4 bg-white bg-opacity-60 text-black border border-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-80 transition"
            onClick={() => setShowAll(true)}
          >
            <Grid size={18} />
            Show all photos
          </button>
        )}
      </div>

      {/* ===== Lightbox Modal ===== */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <img
            src={property.images[lightboxIndex]}
            alt={`Image ${lightboxIndex + 1}`}
            className="max-h-full max-w-full rounded-2xl"
          />
        </div>
      )}

      {/* ===== Property Info ===== */}
      <div className="mt-6 flex flex-col md:flex-row justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{property.title}</h1>
          <p className="mt-2 text-gray-600">{property.description}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 font-medium">⭐ {property.rating}</span>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="w-full md:w-80 p-4 border rounded-xl shadow-md">
          <p className="text-2xl font-semibold">{property.price}</p>
          <button className="w-full mt-4 bg-[#FF385C] hover:bg-[#ff526f] text-white py-2 rounded-lg font-semibold transition">
            Book Now
          </button>
        </div>
      </div>

      {/* ===== Map ===== */}
      <div className="mt-8 w-full h-80 md:h-96 rounded-2xl overflow-hidden mb-5 z-0 relative">
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>{property.title}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default PropertyDetails;
