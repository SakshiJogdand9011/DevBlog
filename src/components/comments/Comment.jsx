import { useState } from 'react';
import { motion } from 'framer-motion';
import { timeAgo } from '../../utils/dateUtils';
import CommentForm from './CommentForm';
import AnimatedButton from '../animations/AnimatedButton';

export default function Comment({ comment, replies, onReply, onDelete }) {
  const [isReplying, setIsReplying] = useState(false);

  const handleReply = (replyData) => {
    onReply(replyData);
    setIsReplying(false);
  };

  return (
    <div className="border-l-2 border-gray-200 pl-4">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-medium text-gray-900">{comment.author}</h4>
            <p className="text-sm text-gray-500">{timeAgo(comment.createdAt)}</p>
          </div>
          {onDelete && (
            <AnimatedButton
              onClick={() => onDelete(comment.id)}
              className="text-sm text-red-600 hover:text-red-700"
            >
              Delete
            </AnimatedButton>
          )}
        </div>
        <p className="text-gray-700 mb-4">{comment.content}</p>
        <div className="flex gap-4">
          <AnimatedButton
            onClick={() => setIsReplying(!isReplying)}
            className="text-sm text-indigo-600 hover:text-indigo-700"
          >
            Reply
          </AnimatedButton>
        </div>
      </div>

      {isReplying && (
        <div className="mt-4 ml-4">
          <CommentForm onSubmit={handleReply} replyTo={comment.id} />
        </div>
      )}

      {replies && replies.length > 0 && (
        <div className="mt-4 ml-4 space-y-4">
          {replies.map(reply => (
            <Comment
              key={reply.id}
              comment={reply}
              onReply={onReply}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}