import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function FeaturedPosts({ posts }) {
  const scrollRef = useRef(null);
  const featuredPosts = posts.filter(post => post.featured).slice(0, 4);

  if (featuredPosts.length === 0) return null;

  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="mb-12 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6 text-indigo-900"
      >
        Featured Posts
      </motion.h2>
      
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {featuredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
            className="flex-none w-[300px] snap-start"
          >
            <Link 
              to={`/post/${post.id}`}
              className="block group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-3">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={post.image} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{post.excerpt.slice(0, 100)}...</p>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}