import { useParams, Link } from "react-router-dom";
import { properties } from "../components/data/properties";
import { useState, useEffect } from "react";
import { Grid } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const PropertyDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = properties.find((p) => p.slug === slug);

  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate Airbnb-like loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!property) {
    return <div className="text-center text-red-500 mt-10">Property not found</div>;
  }

  const displayedImages = showAll ? property.images : property.images.slice(0, 5);
  const center: LatLngExpression = [property.location.lat, property.location.lng];

  // ======== SKELETON LOADER ========
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto mt-5 md:mt-44 sm:mt-10 px-4 animate-pulse">
        {/* Image Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">
          <div className="bg-gray-200 rounded-l-2xl md:col-span-2 md:row-span-2 h-80 md:h-96" />
          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:col-span-2 h-80 md:h-96">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-full w-full" />
            ))}
          </div>
        </div>

        {/* Title + Description Skeleton */}
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1 space-y-3">
            <div className="h-8 bg-gray-200 w-3/4 rounded" />
            <div className="h-4 bg-gray-200 w-full rounded" />
            <div className="h-4 bg-gray-200 w-5/6 rounded" />
            <div className="h-4 bg-gray-200 w-2/3 rounded" />
          </div>

          <div className="w-full md:w-80 p-4 border rounded-xl shadow-md space-y-4">
            <div className="h-6 bg-gray-200 w-1/2 rounded" />
            <div className="h-10 bg-gray-200 w-full rounded" />
          </div>
        </div>

        {/* Map Skeleton */}
        <div className="mt-8 w-full h-80 md:h-96 rounded-2xl bg-gray-200 mb-5" />
      </div>
    );
  }

  // ======== ACTUAL CONTENT ========
  return (
    <div className="max-w-6xl mx-auto mt-5 md:mt-44 sm:mt-10 px-4 transition-opacity duration-700 opacity-100">
      {/* Subtitle */}
      {property.subtitle && (
        <h2 className="text-2xl font-bold mb-4 mt-5">{property.subtitle}</h2>
      )}

      {/* ===== Gallery Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">
        {/* Left big image */}
        {displayedImages[0] && (
          <Link
            to={`/property/${slug}/photo/0`}
            className="overflow-hidden rounded-l-2xl md:col-span-2 md:row-span-2 h-80 md:h-96"
          >
            <img
              src={displayedImages[0].url}
              alt={displayedImages[0].label}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </Link>
        )}

        {/* Right 4 images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:col-span-2 h-80 md:h-96">
          {displayedImages.slice(1, 5).map((img, i) => {
            const realIndex = i + 1;
            let roundedClass = "";
            if (i === 1) roundedClass = "rounded-tr-2xl";
            if (i === 3) roundedClass = "rounded-br-2xl";

            return (
              <Link
                key={realIndex}
                to={`/property/${slug}/photo/${realIndex}`}
                className={`overflow-hidden ${roundedClass}`}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </Link>
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
