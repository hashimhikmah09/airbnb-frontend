import { useRef, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import PropertyCard from "../PopularSection/popularCard"

import img1 from "../../assets/images/image1 (1).jpg"
import img2 from "../../assets/images/image1 (2).jpg"
import img3 from "../../assets/images/image1 (3).jpg"
import img4 from "../../assets/images/image1 (4).jpg"
import img5 from "../../assets/images/image1 (1).jpg"
import img6 from "../../assets/images/image1 (2).jpg"
import img7 from "../../assets/images/image1 (3).jpg"
import img8 from "../../assets/images/image1 (4).jpg"

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const slideVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
}

const availableProperties = [
  { id: 1, image: img1, title: "Apartment in Cape Town City Center", price: "$240 for 2 nights", rating: 4.9, isFavorite: true },
  { id: 2, image: img2, title: "Condo in Cape Town City Center", price: "$310 for 2 nights", rating: 4.98, isFavorite: false },
  { id: 3, image: img3, title: "Apartment in Cape Town City Center", price: "$280 for 2 nights", rating: 4.96, isFavorite: false },
  { id: 4, image: img4, title: "Apartment in Green Point", price: "$180 for 2 nights", rating: 4.92, isFavorite: true },
  { id: 5, image: img5, title: "Apartment in Cape Town City Center", price: "$270 for 2 nights", rating: 4.95, isFavorite: true },
  { id: 6, image: img6, title: "SApartment in Green Point", price: "$198 for 2 nights", rating: 4.89, isFavorite:false },
  { id: 7, image: img7, title: "Apartment in Cape Town City Center", price: "$320 for 2 nights", rating: 4.97, isFavorite: true },
  { id: 8, image: img8, title: "Apartment in Green Point", price: "$200 for 2 nights", rating: 4.91, isFavorite: true },
]

const Kotopon = () => {
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
    <div className="mt-8 sm:mt-10 md:mt-12 pb-24 sm:pb-28 md:pb-10 ">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* === Header with Arrows === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#FF385C] transition">
            <p className="md:text-xl text-md font-bold text-gray-900">
              Stay in La Dade-Kotopon
            </p>
            <FaChevronRight className="text-gray-700 hover:text-[#FF385C] transition" />
          </div>

          {/* Navigation Arrows */}
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

        {/* === Swiper Carousel === */}
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideVariants}
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
            slidesOffsetBefore={0}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 4, spaceBetween: 14 },
              1024: { slidesPerView: 6, spaceBetween: 16 },
              1280: { slidesPerView: 6, spaceBetween: 16 },
            }}
          >
            {availableProperties.map((property) => (
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

export default Kotopon
