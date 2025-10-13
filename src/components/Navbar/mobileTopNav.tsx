"use client"

import { useState } from "react"
import { Search, Home, Sparkles, Briefcase } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const MobileTopNav = () => {
  const [activeTab, setActiveTab] = useState("homes")

  const categories = [
    { id: "homes", label: "Homes", icon: Home, isNew: false, link: "/" },
    { id: "experiences", label: "Experiences", icon: Sparkles, isNew: true, link: "/experiences" },
    { id: "services", label: "Services", icon: Briefcase, isNew: true, link: "/services" },
  ]

  return (
    <>
      {/* Fixed Search Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white  px-4 py-3 md:hidden">
            <div className="relative w-full max-w-md mx-auto">
                <div className="flex justify-center items-center border border-gray-300 rounded-full h-12 px-4 bg-white shadow-md">
                    <div className="flex items-center">
                        <Search className="h-5 w-5 text-black" />
                        <input
                            type="search"
                            placeholder="Start your search"
                            className="w-40 text-black placeholder-black bg-transparent border-none focus:outline-none text-center"
                        />
                    </div>
                </div>
            </div>
        </div>

      {/* Spacer for fixed search */}
      <div className="h-16 md:hidden" />

      {/* Scrollable Category Tabs */}
      <div className="flex justify-center px-4 py-3 border-b border-gray-200 bg-white shadow-md md:hidden">
        <div className="flex gap-25"> {/* Increased gap */}
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeTab === category.id

            return (
              <Link
                key={category.id}
                to={category.link}
                onClick={() => setActiveTab(category.id)}
                className="flex flex-col items-center gap-2 text-center relative"
              >
                {/* Icon with optional NEW badge */}
                <div className="relative flex items-center">
                  <Icon className={`h-6 w-6 ${isActive ? "text-black" : "text-gray-400"}`} />

                  {category.isNew && (
                    <motion.span
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="ml-1 px-2 py-0.5 text-[10px] font-semibold bg-[#001F5B] text-white rounded-full shadow"
                    >
                      NEW
                    </motion.span>
                  )}
                </div>

                {/* Label */}
                <span className={`text-sm font-medium ${isActive ? "text-black" : "text-gray-600"}`}>
                  {category.label}
                </span>

                {/* Active underline */}
                {isActive && <div className="mt-1 h-0.5 w-full bg-black rounded-full" />}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MobileTopNav;
