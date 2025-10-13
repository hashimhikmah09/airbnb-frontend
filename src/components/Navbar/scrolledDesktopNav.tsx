import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Home, Globe, Menu, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import logo1 from "../../assets/images/logo1.jpeg"
import hostImg from "../../assets/images/hostimg.jpg" // ✅ Your host image

const ScrolledNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <nav className="flex items-center justify-between max-w-[1280px] mx-auto px-6 py-3">
        {/* === Left: Logo === */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo1} alt="Logo" className="w-8 h-8 object-contain rounded-md" />
          <span className="text-2xl font-bold text-[#FF385C] tracking-tight">airbnb</span>
        </Link>

        {/* === Center: Compact Search Bar === */}
        <div className="flex items-center justify-between bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition px-4 py-[6px] cursor-pointer w-[320px] md:w-[380px] lg:w-[420px]">
          <div className="flex items-center gap-2 text-[14px] text-gray-800 font-medium">
            <Home size={16} className="text-gray-600" />
            <span>Anywhere</span>
            <span className="text-gray-300">|</span>
            <span>Any week</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">Add guests</span>
          </div>
          <div className="ml-3 bg-[#FF385C] p-2 rounded-full text-white flex items-center justify-center hover:bg-[#ff516d] transition">
            <Search size={16} />
          </div>
        </div>

        {/* ===== Right Section ===== */}
                <div className="flex items-center gap-4 relative">
                  {/* Become a Host */}
                  <Link
                    to="/become-a-host"
                    className="hidden lg:inline-flex text-sm font-medium text-gray-900 px-4 py-2 rounded-full hover:bg-gray-300 transition"
                  >
                    Become a host
                  </Link>

                  {/* Globe */}
                  <div className="flex items-center border border-gray-300 rounded-full p-3 cursor-pointer hover:shadow-md transition bg-gray-200">
                    <Globe
                      size={20}
                      className="hidden md:block cursor-pointer hover:text-gray-600 transition"
                    />
                  </div>

                  {/* Menu Icon */}
                  <div
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center border border-gray-300 rounded-full p-3 cursor-pointer hover:shadow-md transition bg-gray-200"
                  >
                    <Menu size={18} />
                  </div>

                  {/* ===== Dropdown Menu ===== */}
                  <AnimatePresence>
                    {menuOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="fixed top-20 right-8 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-[99999]"
                      >
                        <div className="flex flex-col text-sm text-black">
                          <Link
                            to="/help"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                          >
                            <HelpCircle size={16} /> Help Center
                          </Link>

                          <hr className="my-3 mx-4 border-t border-gray-300 border-[0.3px]" />

                          {/* Hosting Section */}
                          <div className="flex items-start gap-3 px-4 py-2 hover:bg-gray-100 transition rounded-lg">
                            

                            {/* Text Content */}
                            <div>
                              <Link
                                to="/become-a-host"
                                onClick={() => setMenuOpen(false)}
                                className="font-medium text-gray-800 hover:text-black"
                              >
                                Become a Host
                              </Link>
                              <p className="text-gray-500 text-sm mt-1">
                                It's easy to start hosting and earn extra income
                              </p>
                            </div>
                            {/* Host Image */}
                            <img
                              src={hostImg}
                              alt="Become a Host"
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          </div>
                          <hr className="my-3 mx-4 border-t border-gray-300 border-[0.3px]" />
                          <Link
                            to="/refer"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2 hover:bg-gray-100"
                          >
                            Refer a Host
                          </Link>
                          <Link
                            to="/host"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2 hover:bg-gray-100"
                          >
                            Find a co-host
                          </Link>
                          
                          <Link
                            to="/gift"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2 hover:bg-gray-100"
                          >
                            Gift cards
                          </Link>

                          <hr className="my-3 mx-4 border-t border-gray-300 border-[0.5px]" />
                          
                          <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2 hover:bg-gray-100 font-semibold"
                          >
                            Log in or Sign up
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
      </nav>
    </header>
  )
}

export default ScrolledNavbar
