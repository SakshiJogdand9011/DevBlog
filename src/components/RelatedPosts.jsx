import { Link } from 'react-router-dom';

export default function RelatedPosts({ currentPost, posts }) {
  const relatedPosts = posts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map(post => (
          <Link 
            key={post.id} 
            to={`/post/${post.id}`}
            className="group block"
          >
            <div className="aspect-[16/9] mb-3 overflow-hidden rounded-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}