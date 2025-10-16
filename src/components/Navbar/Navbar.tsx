import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Globe, HelpCircle, Home, Sparkles, Briefcase, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "../../assets/images/logo1.jpeg";
import MobileBottomNav from "./mobileBottomNav";
import MobileTopNav from "./mobileTopNav";
import ScrolledNavbar from "./scrolledDesktopNav";
import hostImg from "../../assets/images/hostimg.jpg";
import WhereDropdown from "./whereDropdown";
import CheckInDropdown from "./CheckInDropdown";
import CheckOutDropdown from "./CheckOutDropdown";
import WhoDropdown from "./WhoDropdown";

interface Guests {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [showWhere, setShowWhere] = useState(false);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [showWho, setShowWho] = useState(false);
  const [showSearchExpanded, setShowSearchExpanded] = useState(false);

  const [checkInLabel, setCheckInLabel] = useState("Check in");
  const [checkOutLabel, setCheckOutLabel] = useState("Check out");
  const [selectedCheckIn, setSelectedCheckIn] = useState<string | null>(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState<string | null>(null);

  const [, setTimeFrame] = useState("");

  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const checkInRef = useRef<HTMLDivElement>(null);
  const checkOutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedCheckIn && selectedCheckOut) {
      setTimeFrame(`${selectedCheckIn} - ${selectedCheckOut}`);
      setCheckInLabel("When");
      setCheckOutLabel("When");
    } else if (selectedCheckIn) {
      setTimeFrame(selectedCheckIn);
      setCheckInLabel("When");
      setCheckOutLabel("Check out");
    } else {
      setTimeFrame("");
      setCheckInLabel("Check in");
      setCheckOutLabel("Check out");
    }
  }, [selectedCheckIn, selectedCheckOut]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest(".where-section") &&
        !checkInRef.current?.contains(target) &&
        !checkOutRef.current?.contains(target) &&
        !target.closest(".who-search-section") &&
        !target.closest(".menu-dropdown")
      ) {
        setShowWhere(false);
        setShowCheckIn(false);
        setShowCheckOut(false);
        setShowWho(false);
        setShowSearchExpanded(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <header className={`hidden md:block fixed top-0 left-0 w-full z-[50] transition-all duration-300 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <nav className="w-full bg-gray-100 backdrop-blur-md shadow-sm">
          {/* Combined Top + Search Bar */}
          <div className="flex flex-col max-w-7xl mx-auto px-8 py-3">
            {/* Top section */}
            <div className="flex justify-between items-center mb-3">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo1} alt="Logo" className="w-8 h-8 object-contain rounded-full" />
                <span className="text-2xl font-bold text-red-500 tracking-tight hidden lg:inline">airbnb</span>
              </Link>

              {/* Middle menu items */}
<div className="hidden lg:flex justify-center items-center gap-6 mt-2">
  <Link
    to="/"
    className={`flex items-center gap-1 font-medium px-2 py-1 rounded-full transition ${
      location.pathname === "/" ? "bg-gray-200 text-gray-900" : "text-gray-900 hover:text-gray-700"
    }`}
  >
    <Home size={18} /> <span>Home</span>
  </Link>

  <Link
    to="/experiences"
    className={`flex items-center gap-1 font-medium px-2 py-1 rounded-full transition relative ${
      location.pathname === "/experiences" ? "bg-gray-200 text-gray-900" : "text-gray-900 hover:text-gray-700"
    }`}
  >
    <Sparkles size={18} /> <span>Experiences</span>
    <span className="absolute -top-2 left-7 bg-blue-800 text-white text-[10px] px-1 rounded-full">NEW</span>
  </Link>

  <Link
    to="/services"
    className={`flex items-center gap-1 font-medium px-2 py-1 rounded-full transition relative ${
      location.pathname === "/services" ? "bg-gray-200 text-gray-900" : "text-gray-900 hover:text-gray-700"
    }`}
  >
    <Briefcase size={18} /> <span>Services</span>
    <span className="absolute -top-2 left-7 bg-blue-800 text-white text-[10px] px-1 rounded-full">NEW</span>
  </Link>
</div>

              <div className="flex items-center gap-4">
                <Link
                  to="/become-a-host"
                  className="hidden lg:inline-flex text-sm font-medium text-gray-900 px-4 py-2 rounded-full hover:bg-gray-300 transition"
                >
                  Become a host
                </Link>
                <div className="flex items-center border border-gray-300 rounded-full p-3 cursor-pointer hover:shadow-md transition bg-gray-200">
                  <Globe size={20} />
                </div>
                <div
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center border border-gray-300 rounded-full p-3 cursor-pointer hover:shadow-md transition bg-gray-200"
                >
                  <Menu size={18} />
                </div>
              </div>
            </div>

            {/* Dropdown menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="menu-dropdown fixed top-20 right-8 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-[9999]"
                >
                  <div className="flex flex-col text-sm text-black">
                    <Link to="/help" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                      <HelpCircle size={16} /> Help Center
                    </Link>
                    <div className="flex items-start gap-3 px-4 py-2 hover:bg-gray-100 transition rounded-lg">
                      <div>
                        <Link to="/become-a-host" className="font-medium text-gray-800 hover:text-black">Become a Host</Link>
                        <p className="text-gray-500 text-sm mt-1">It's easy to start hosting and earn extra income</p>
                      </div>
                      <img src={hostImg} alt="Become a Host" className="w-10 h-10 rounded-full object-cover" />
                    </div>
                    <Link to="/refer" className="px-4 py-2 hover:bg-gray-100">Refer a Host</Link>
                    <Link to="/gift" className="px-4 py-2 hover:bg-gray-100">Gift cards</Link>
                    <Link to="/login" className="px-4 py-2 hover:bg-gray-100 font-semibold">Log in or Sign up</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Search Bar */}
            <div className="flex justify-center w-full">
              <div className="flex items-center bg-gray-300 text-gray-700 rounded-full shadow-md w-full max-w-4xl hover:shadow-lg transition overflow-visible relative">
                {/* WHERE */}
                <div
                  className={`where-section relative flex-[1.5] flex flex-col justify-center px-4 py-4 cursor-pointer ${
                    showWhere ? "bg-white rounded-full shadow-md" : "hover:bg-gray-200 rounded-full"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowWhere(!showWhere);
                    setShowCheckIn(false);
                    setShowCheckOut(false);
                    setShowWho(false);
                  }}
                >
                  <span className="text-[16px] font-semibold text-gray-900">Where</span>
                  <span className="text-gray-500 text-[14px]">Add location</span>
                  <AnimatePresence>
                    {showWhere && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-[100%] mt-3 w-[calc(100%+2rem)] max-w-5xl -translate-x-1/2 z-[99999]"
                      >
                        <WhereDropdown />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CHECK-IN */}
                <div
                  ref={checkInRef}
                  className={`relative flex-[1.2] flex flex-col justify-center px-4 py-3 cursor-pointer ${
                    showCheckIn ? "bg-white shadow-md rounded-full" : "hover:bg-gray-300 rounded-full"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCheckIn(!showCheckIn);
                    setShowCheckOut(false);
                    setShowWhere(false);
                    setShowWho(false);
                  }}
                >
                  <span className="text-[16px] font-semibold text-gray-900">{checkInLabel}</span>
                  <span className="text-gray-500 text-[14px]">{selectedCheckIn || "Add date"}</span>
                  <AnimatePresence>
                    {showCheckIn && (
                      <CheckInDropdown
                        selectedDate={selectedCheckIn}
                        onDateSelect={setSelectedCheckIn}
                        onAutoOpenCheckout={() => {
                          setShowCheckOut(true);
                          setShowCheckIn(false);
                        }}
                        setCheckInLabel={setCheckInLabel}
                        setTimeFrame={setTimeFrame}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* CHECK-OUT */}
                <div
                  ref={checkOutRef}
                  className={`relative flex-[1.2] flex flex-col justify-center px-4 py-3 cursor-pointer ${
                    showCheckOut ? "bg-white shadow-md rounded-full" : "hover:bg-gray-300 rounded-full"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCheckOut(!showCheckOut);
                    setShowCheckIn(false);
                    setShowWhere(false);
                    setShowWho(false);
                  }}
                >
                  <span className="text-[16px] font-semibold text-gray-900">{checkOutLabel}</span>
                  <span className="text-gray-500 text-[14px]">{selectedCheckOut || "Add date"}</span>
                  <AnimatePresence>
                    {showCheckOut && (
                      <CheckOutDropdown
                        selectedDate={selectedCheckOut}
                        onDateSelect={setSelectedCheckOut}
                        checkInDate={selectedCheckIn}
                        setCheckOutLabel={setCheckOutLabel}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* WHO + SEARCH */}
                <div className="who-search-section relative flex-[1.5] px-2">
                  <div
                    className={`flex items-center rounded-full cursor-pointer overflow-hidden transition-all duration-200 ${
                      showWho || showSearchExpanded ? "bg-white" : "hover:bg-gray-200"
                    }`}
                  >
                    <div
                      className="flex flex-col flex-1 px-4 py-3"
                      onClick={() => {
                        setShowWho(!showWho);
                        setShowSearchExpanded(!showSearchExpanded);
                        setShowWhere(false);
                        setShowCheckIn(false);
                        setShowCheckOut(false);
                      }}
                    >
                      <span className="text-[16px] font-semibold text-gray-900">Who</span>
                      <span className="text-gray-500 text-[14px]">
                        {guests.adults + guests.children + guests.infants + guests.pets > 0
                          ? `${guests.adults + guests.children + guests.infants + guests.pets} guests`
                          : "Add guests"}
                      </span>
                    </div>

                    <motion.div
                      className="flex items-center bg-red-500 text-white px-4 py-3 rounded-full ml-2"
                      animate={{ width: showSearchExpanded ? 100 : 48 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Search size={18} />
                      {showSearchExpanded && <span className="ml-2 font-medium">Search</span>}
                    </motion.div>

                    <AnimatePresence>
                      {showWho && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 5 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg z-[100]"
                        >
                          <WhoDropdown guests={guests} setGuests={setGuests} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* === Mobile === */}
      <MobileTopNav />
      <MobileBottomNav />

      {/* Scroll Navbar only on desktop */}
      {scrolled && (
        <div className="hidden md:block">
          <ScrolledNavbar />
        </div>
      )}
    </>
  );
};

export default Navbar;
