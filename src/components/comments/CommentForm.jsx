import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../animations/AnimatedButton';

export default function CommentForm({ onSubmit, replyTo = null }) {
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim() || !author.trim()) return;

    onSubmit({
      content: comment,
      author,
      createdAt: new Date().toISOString(),
      replyTo
    });

    setComment('');
    setAuthor('');
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Share your thoughts..."
          required
        />
      </div>
      <AnimatedButton
        type="submit"
        className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        {replyTo ? 'Reply' : 'Post Comment'}
      </AnimatedButton>
    </motion.form>
  );
}