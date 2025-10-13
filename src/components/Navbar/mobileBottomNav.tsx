"use client"

import { useState } from "react"
import { Search, Heart, User } from "lucide-react"

const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState("search")

  const navItems = [
    { id: "explore", label: "Explore", icon: Search },
    { id: "wishlists", label: "Wishlists", icon: Heart },
    { id: "login", label: "Login", icon: User },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white  md:hidden">
      <nav className="flex items-center justify-around h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors"
            >
              <Icon className={`h-6 w-6 ${isActive ? "text-red-600" : "text-gray-400"}`} />
              <span className={`text-xs font-medium ${isActive ? "text-red-600" : "text-gray-400"}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
export default MobileBottomNav