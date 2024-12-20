import { motion } from 'framer-motion';

export default function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <select
        value={selectedCategory}
        onChange={(e) => onCategorySelect(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </motion.div>
  );
}