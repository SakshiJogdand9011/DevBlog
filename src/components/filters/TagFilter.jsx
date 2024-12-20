import { motion } from 'framer-motion';

export default function TagFilter({ tags, selectedTags, onTagSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <motion.button
          key={tag}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: selectedTags.includes(tag) ? '#4338ca' : '#e5e7eb'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onTagSelect(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedTags.includes(tag)
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tag}
        </motion.button>
      ))}
    </div>
  );
}