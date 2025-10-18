import React from "react"
import { Heart } from "lucide-react"
import type { Property } from "../data/properties"
import { Link } from "react-router-dom"

const PropertyCard: React.FC<Property> = ({ title, price, rating, isFavorite, images, slug }) => {
  const mainImage = images?.[0]?.url ?? "/placeholder.jpg"
  const mainAlt = images?.[0]?.label ?? title

  return (
    <Link
      to={`/property/${slug}`}
      className="group relative w-full rounded-2xl overflow-hidden cursor-pointer block"
    >
      <div className="relative w-full h-36 sm:h-44 md:h-48 lg:h-52 rounded-2xl overflow-hidden">
        <img
          src={mainImage}
          alt={mainAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {isFavorite && (
          <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-[11px] font-semibold px-3 py-[2px] rounded-full shadow-sm">
            Guest favorite
          </span>
        )}

        <button
          className="absolute top-3 right-3 hover:scale-110 transition-transform"
          aria-label="Add to favorites"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-gray-200 text-gray-200" : "text-white drop-shadow"
            }`}
          />
        </button>
      </div>

      <div className="pt-2">
        <h3 className="text-[15px] font-semibold text-gray-900 leading-tight">{title}</h3>
        <div className="flex items-center gap-1 text-[14px] text-gray-600">
          <p>{price}</p>
          <span className="flex items-center gap-1 text-gray-800 font-medium">
            <span className="text-yellow-500 text-[15px]">★</span>
            {rating}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard
