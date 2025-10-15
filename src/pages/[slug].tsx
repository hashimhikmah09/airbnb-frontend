import { useParams } from "react-router-dom"
import { properties } from "../components/data/properties"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const PropertyDetails = () => {
  const { slug } = useParams<{ slug: string }>()
  const property = properties.find((p) => p.slug === slug)

  if (!property) {
    return <div className="text-center text-red-500 mt-10">Property not found</div>
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {/* Gallery */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        className="rounded-2xl"
      >
        {property.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`${property.title} - ${i + 1}`}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Info Section */}
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

          {/* {/* Host Info
          <div className="flex items-center gap-3 mt-4">
            <img
              src={property.host.avatar}
              alt={property.host.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-gray-700 font-medium">Hosted by {property.host.name}</p>
          </div> */}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-8 h-64 w-full bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
        Map Preview (Add Google Maps or Leaflet here)
      </div>
    </div>
  )
}

export default PropertyDetails
