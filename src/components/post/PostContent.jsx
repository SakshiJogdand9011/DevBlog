import { formatDate } from '../../utils/dateUtils';

export default function PostContent({ post }) {
  return (
    <div className="prose max-w-none">
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center flex-wrap gap-2 text-gray-600">
          <span className="font-medium">{post.author}</span>
          <span>•</span>
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span className="text-blue-600">{post.category}</span>
        </div>
      </header>
      <p className="text-gray-800 leading-relaxed text-lg">{post.content}</p>
    </div>
  );
}