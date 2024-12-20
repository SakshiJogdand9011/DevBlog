import { useState } from 'react';
import { motion } from 'framer-motion';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { generateId } from '../../utils/idUtils';

export default function CommentsSection({ postId }) {
  const [comments, setComments] = useState([]);

  const handleAddComment = (commentData) => {
    const newComment = {
      id: generateId(),
      postId,
      ...commentData
    };
    setComments(prev => [newComment, ...prev]);
  };

  const handleReply = (replyData) => {
    const newReply = {
      id: generateId(),
      postId,
      ...replyData
    };
    setComments(prev => [...prev, newReply]);
  };

  const handleDelete = (commentId) => {
    setComments(prev => prev.filter(comment => comment.id !== commentId));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-12 pt-8 border-t"
    >
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      
      <div className="mb-8">
        <CommentForm onSubmit={handleAddComment} />
      </div>

      <CommentList
        comments={comments}
        onReply={handleReply}
        onDelete={handleDelete}
      />
    </motion.section>
  );
}