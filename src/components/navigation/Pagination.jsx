import { motion } from 'framer-motion';
import AnimatedButton from '../animations/AnimatedButton';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center space-x-4">
      <AnimatedButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
        }`}
      >
        Previous
      </AnimatedButton>

      <span className="px-4 py-2 text-gray-700 font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <AnimatedButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
        }`}
      >
        Next
      </AnimatedButton>
    </div>
  );
}