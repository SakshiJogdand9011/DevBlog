import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-2">
          <Link to={`/post/${post.id}`} className="text-gray-900 hover:text-blue-600">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span className="text-blue-600">{post.category}</span>
        </div>
      </div>
    </article>
  );
}