import { useRef, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import PropertyCard from "./popularCard"
import { properties } from "../../components/data/properties"

const PopularSection = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning)
      setIsEnd(swiperRef.current.isEnd)
    }
  }

  return (
    <div className="mt-10 sm:mt-10 md:mt-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#FF385C] transition">
            <p className="md:text-xl text-md font-bold text-gray-900">
              Popular homes in London
            </p>
            <FaChevronRight className="text-gray-700 hover:text-[#FF385C] transition" />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`rounded-full w-6 h-6 flex items-center justify-center shadow-md transition-all duration-300 ${
                isBeginning
                  ? "bg-gray-200 cursor-not-allowed opacity-50"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              <FaChevronLeft size={18} className="text-black" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`rounded-full w-6 h-6 flex items-center justify-center shadow-md transition-all duration-300 ${
                isEnd
                  ? "bg-pink-200 cursor-not-allowed opacity-50"
                  : "bg-[#FF385C] hover:bg-[#ff526f]"
              }`}
            >
              <FaChevronRight size={18} className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
            onSlideChange={handleSlideChange}
            modules={[Navigation, Pagination]}
            spaceBetween={12}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 4, spaceBetween: 14 },
              1024: { slidesPerView: 6, spaceBetween: 16 },
              1280: { slidesPerView: 6, spaceBetween: 16 },
            }}
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <PropertyCard {...property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  )
}

export default PopularSection
