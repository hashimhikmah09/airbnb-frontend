import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  Globe,
  HelpCircle,
  Home,
  Sparkles,
  Briefcase,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "../../assets/images/logo1.jpeg";
import MobileBottomNav from "./mobileBottomNav";
import MobileTopNav from "./mobileTopNav";
import ScrolledNavbar from "./scrolledDesktopNav"; // ✅ Import the scrolled navbar
import hostImg from "../../assets/images/hostimg.jpg";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <header className="hidden md:block fixed top-0 left-0 w-full z-[9999] mb-10">
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-200/80 overflow-hidden w-full shadow-sm"
            >
              {/* ===== Top Navbar ===== */}
              <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                  <img
                    src={logo1}
                    alt="Logo"
                    className="w-8 h-8 object-contain rounded-full"
                  />
                   {/* Show text on mobile (sm) and desktop (lg), hide on tablet (md) */}
                  <span className="text-2xl font-bold text-red-500 tracking-tight md:hidden lg:inline">
                    airbnb
                  </span>
                </Link>

                {/* Navigation Links */}
                <ul className="flex gap-10 text-md font-medium">
                  {[
                    { id: "/", label: "Home", icon: Home },
                    {
                      id: "/experiences",
                      label: "Experiences",
                      icon: Sparkles,
                      isNew: true,
                    },
                    {
                      id: "/services",
                      label: "Services",
                      icon: Briefcase,
                      isNew: true,
                    },
                  ].map((item) => (
                    <li
                      key={item.id}
                      className="relative group flex items-center gap-1"
                    >
                      <Link
                        to={item.id}
                        className={`relative pb-1 flex items-center gap-1 ${
                          location.pathname === item.id
                            ? "text-black"
                            : "text-gray-500 hover:text-black"
                        } transition`}
                      >
                        <item.icon size={16} />
                        {item.label}
                        {item.isNew && (
                          <span className="absolute -top-3 left-[2px] bg-blue-900 text-white text-[10px] font-semibold px-1.5 py-[1px] rounded-full shadow-md cursor-pointer">
                            NEW
                          </span>
                        )}
                        {location.pathname === item.id && (
                          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black rounded-full"></span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

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

              {/* ===== Second Navbar (Search Bar) ===== */}
              <div className="flex justify-center w-full mb-6 px-8 bg-gray-200/80 pb-4">
                <div className="flex items-center bg-white text-gray-700 rounded-full shadow-md w-full max-w-5xl hover:shadow-lg transition overflow-hidden">
                  {/* Where */}
                  <div className="group flex-[1.5] flex flex-col justify-center px-4 py-4 cursor-pointer transition-all duration-200 hover:bg-gray-100 rounded-full">
                    <span className="text-[16px] font-semibold text-gray-900">
                      Where
                    </span>
                    <span className="text-gray-500 text-[14px]">
                      Search destinations
                    </span>
                  </div>
                  <div className="h-10 w-px bg-gray-300" />

                  {/* Check-in */}
                  <div className="group flex-1 flex flex-col justify-center px-4 py-4 cursor-pointer transition-all duration-200 hover:bg-gray-100 rounded-full">
                    <span className="text-[16px] font-semibold text-gray-900">
                      Check in
                    </span>
                    <span className="text-gray-500 text-[14px]">Add dates</span>
                  </div>
                  <div className="h-10 w-px bg-gray-300" />

                  {/* Check-out */}
                  <div className="group flex-1 flex flex-col justify-center px-4 py-4 cursor-pointer transition-all duration-200 hover:bg-gray-100 rounded-full">
                    <span className="text-[16px] font-semibold text-gray-900">
                      Check out
                    </span>
                    <span className="text-gray-500 text-[14px]">Add dates</span>
                  </div>
                  <div className="h-10 w-px bg-gray-300" />

                  {/* Who + Search */}
                  <div className="group flex-[1.5] flex items-center justify-between px-4 py-4 cursor-pointer transition-all duration-200 hover:bg-gray-100 rounded-full">
                    <div className="flex flex-col">
                      <span className="text-[16px] font-semibold text-gray-900">
                        Who
                      </span>
                      <span className="text-gray-500 text-[14px]">
                        Add guests
                      </span>
                    </div>
                    <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition ml-3">
                      <Search size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ===== Scrolled Navbar ===== */}
          {scrolled && <ScrolledNavbar />}
        </AnimatePresence>
      </header>

      {/* ===== Mobile Top & Bottom Navs ===== */}
      <MobileTopNav />
      <MobileBottomNav />
    </>
  );
};

export default Navbar;
