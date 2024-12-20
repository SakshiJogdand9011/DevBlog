import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PostCard({ post }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
    >
      <Link to={`/post/${post.id}`}>
        <div className="relative overflow-hidden aspect-[16/9]">
          <motion.img 
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map(tag => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 bg-gray-100 text-sm rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}