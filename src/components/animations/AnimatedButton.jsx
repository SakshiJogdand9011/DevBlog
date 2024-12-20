import { motion } from 'framer-motion';

export default function AnimatedButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 8px rgba(66, 153, 225, 0.5)'
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-white opacity-30"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ 
          scale: 4,
          opacity: 0.3,
          transition: { duration: 0.5 }
        }}
      />
    </motion.button>
  );
}