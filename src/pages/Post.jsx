import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import RelatedPosts from '../components/RelatedPosts';
import PostContent from '../components/post/PostContent';
import PostImage from '../components/post/PostImage';
import CommentsSection from '../components/comments/CommentsSection';
import ScrollReveal from '../components/animations/ScrollReveal';

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <ScrollReveal>
        <PostImage src={post.image} alt={post.title} />
        <PostContent post={post} />
      </ScrollReveal>

      <ScrollReveal>
        <CommentsSection postId={post.id} />
      </ScrollReveal>

      <ScrollReveal>
        <RelatedPosts currentPost={post} posts={posts} />
      </ScrollReveal>
    </article>
  );
}