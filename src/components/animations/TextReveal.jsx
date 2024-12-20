import { motion } from 'framer-motion';

export default function TextReveal({ text, delay = 0 }) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap"
    >
      {words.map((word, i) => (
        <motion.span
          variants={child}
          key={i}
          className="mr-1.5"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}