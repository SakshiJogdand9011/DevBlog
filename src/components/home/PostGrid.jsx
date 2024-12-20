import PostCard from '../post/PostCard';
import FadeIn from '../animations/FadeIn';

export default function PostGrid({ posts }) {
  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
      {posts.map((post, index) => (
        <FadeIn key={post.id} delay={0.1 * (index % 3)}>
          <PostCard post={post} />
        </FadeIn>
      ))}
    </div>
  );
}