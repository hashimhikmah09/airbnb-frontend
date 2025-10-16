import { useState, useRef } from "react";
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isBefore,
  isSameDay,
  isToday,
} from "date-fns";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface CheckOutDropdownProps {
  selectedDate: string | null;
  onDateSelect: (date: string | null) => void;
  setCheckOutLabel: (label: string) => void;
   checkInDate: string | null;   
  setTimeFrame?: (label: string) => void;
}

type Tab = "Dates" | "Months" | "Flexible";

const CheckOutDropdown: React.FC<CheckOutDropdownProps> = ({
  selectedDate,
  onDateSelect,
  setTimeFrame,
}) => {
  const [currentMonth, _setCurrentMonth] = useState(new Date());
  const [activeTab, setActiveTab] = useState<Tab>("Dates");
  const scrollRef = useRef<HTMLDivElement>(null);

  const monthsStart = new Date(2025, 10, 1);
  const monthsEnd = new Date(2026, 1, 1);

  const handleMonthsTabClick = () => {
    setActiveTab("Months");
    if (setTimeFrame) {
      const defaultTimeFrame = `${format(monthsStart, "MMM d, yyyy")} - ${format(
        monthsEnd,
        "MMM d, yyyy"
      )}`;
      setTimeFrame(defaultTimeFrame);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const renderMonth = (monthDate: Date) => {
    const start = startOfMonth(monthDate);
    const end = endOfMonth(monthDate);
    const days = eachDayOfInterval({ start, end });
    const emptyDays = Array(start.getDay()).fill(null);
    const today = new Date();

    return (
      <div className="w-full max-w-[420px]">
        <h2 className="text-center font-semibold mb-2">{format(monthDate, "MMMM yyyy")}</h2>
        <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((d) => <span key={d}>{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-gray-800">
          {emptyDays.map((_, i) => <div key={`e-${i}`} />)}
          {days.map((day) => {
            const isPast = isBefore(day, today) && !isSameDay(day, today);
            const formatted = format(day, "MMM d");
            const isSelected = selectedDate === formatted;

            return (
              <button
                key={day.toString()}
                disabled={isPast}
                onClick={(e) => {
                  e.stopPropagation();
                  onDateSelect(isSelected ? null : formatted);
                }}
                className={`py-2 text-sm rounded-full transition duration-150 w-10 h-10 flex items-center justify-center
                  ${
                    isPast
                      ? "text-gray-400 cursor-not-allowed opacity-50"
                      : isSelected
                      ? "bg-black text-white"
                      : isToday(day)
                      ? "border border-black text-black"
                      : "hover:bg-gray-200"
                  }`}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const months = [
    "October 2025", "November 2025", "December 2025",
    "January 2026", "February 2026", "March 2026",
    "April 2026", "May 2026", "June 2026",
    "July 2026", "August 2026", "September 2026"
  ];

  const renderContent = () => {
    if (activeTab === "Dates") {
      return (
        <div className="flex justify-center gap-10 mt-2">
          {renderMonth(currentMonth)}
          {renderMonth(addMonths(currentMonth, 1))}
        </div>
      );
    }

    if (activeTab === "Months") {
      return (
        <div className="flex flex-col items-center gap-4 mt-4">
          <motion.div
            className="w-44 h-44 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 flex flex-col items-center justify-center p-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("Dates")}
          >
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">3</span>
              <span className="text-lg font-medium">months</span>
            </div>
          </motion.div>
          <div
            className="flex gap-2 text-sm font-semibold underline text-black cursor-pointer"
            onClick={() => setActiveTab("Dates")}
          >
            <span>{format(monthsStart, "MMM d, yyyy")}</span>
            <span>-</span>
            <span>{format(monthsEnd, "MMM d, yyyy")}</span>
          </div>
        </div>
      );
    }

    if (activeTab === "Flexible") {
      return (
        <div className="flex flex-col items-center mt-2 relative">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-4">
            How long would you like to stay?
          </h3>

          <div className="flex justify-center gap-4 mb-6">
            {["Weekend", "Week", "Month"].map((label) => (
              <button
                key={label}
                onClick={() => setTimeFrame && setTimeFrame(label)}
                className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition text-[15px] font-medium"
              >
                {label}
              </button>
            ))}
          </div>

          <h4 className="text-center text-gray-800 font-medium text-lg mb-4">Go anytime</h4>

          <div className="relative w-full max-w-[720px] h-[160px] flex items-center">
            <button
              onClick={scrollLeft}
              className="absolute left-0 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
            >
              <ChevronLeft size={22} />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto no-scrollbar px-10 scroll-smooth"
            >
              {months.map((month) => (
                <div
                  key={month}
                  onClick={() => setTimeFrame && setTimeFrame(month)}
                  className="min-w-[130px] flex flex-col items-center justify-center border border-gray-300 rounded-2xl py-4 hover:border-gray-500 hover:bg-gray-50 transition cursor-pointer"
                >
                  <Calendar className="text-gray-700 mb-2" size={22} />
                  <span className="text-sm text-gray-700">{month}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl border border-gray-100
      w-[1004px] max-w-[95vw] p-6 z-[99999] max-h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex rounded-full bg-gray-200 p-1 gap-1">
          {(["Dates", "Months", "Flexible"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={(e) => {
                e.stopPropagation();
                if (tab === "Months") handleMonthsTabClick();
                else setActiveTab(tab);
              }}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-white text-gray-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default CheckOutDropdown;
