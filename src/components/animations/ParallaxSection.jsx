import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxSection({ children, offset = 50 }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, offset]);

  return (
    <motion.div style={{ y }} className="relative">
      {children}
    </motion.div>
  );
}