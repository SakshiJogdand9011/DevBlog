import { motion, AnimatePresence } from 'framer-motion';
import Comment from './Comment';

export default function CommentList({ comments, onReply, onDelete }) {
  const topLevelComments = comments.filter(comment => !comment.replyTo);

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {topLevelComments.map(comment => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Comment
              comment={comment}
              replies={comments.filter(reply => reply.replyTo === comment.id)}
              onReply={onReply}
              onDelete={onDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}