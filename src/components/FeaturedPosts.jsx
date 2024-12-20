import { Link } from 'react-router-dom';

export default function FeaturedPosts({ posts }) {
  const featuredPosts = posts.filter(post => post.featured);

  if (featuredPosts.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredPosts.map(post => (
          <article key={post.id} className="relative group">
            <Link to={`/post/${post.id}`} className="block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex gap-2 mb-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 text-sm bg-white/20 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-sm text-white/80">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}