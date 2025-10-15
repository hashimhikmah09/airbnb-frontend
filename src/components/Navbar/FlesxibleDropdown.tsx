import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface FlexibleDropdownProps {
  onSelect: (label: string) => void;
}

const months = [
  "October 2025",
  "November 2025",
  "December 2025",
  "January 2026",
  "February 2026",
  "March 2026",
];

const FlexibleDropdown: React.FC<FlexibleDropdownProps> = ({ onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 5 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-3xl shadow-xl p-8 z-[100] min-h-[380px] flex flex-col justify-between"
      onClick={(e) => e.stopPropagation()}
    >
      {/* === Title === */}
      <h3 className="text-center text-xl font-semibold text-gray-900 mb-4">
        How long would you like to stay?
      </h3>

      {/* === Stay duration buttons === */}
      <div className="flex justify-center gap-4 mb-8">
        {["Weekend", "Week", "Month"].map((label) => (
          <button
            key={label}
            onClick={() => onSelect(label)}
            className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition text-[15px] font-medium"
          >
            {label}
          </button>
        ))}
      </div>

      {/* === Go Anytime === */}
      <h4 className="text-center text-gray-800 font-medium text-lg mb-4">
        Go anytime
      </h4>

      {/* === Month selector === */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-3 pb-2">
        {months.map((month) => (
          <div
            key={month}
            onClick={() => onSelect(month)}
            className="min-w-[130px] flex flex-col items-center justify-center border border-gray-300 rounded-2xl py-5 hover:border-gray-500 hover:bg-gray-50 transition cursor-pointer"
          >
            <Calendar className="text-gray-700 mb-2" size={22} />
            <span className="text-sm text-gray-700">{month}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FlexibleDropdown;
