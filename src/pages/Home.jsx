import { useState, useMemo } from 'react';
import { posts } from '../data/posts';
import { filterPosts } from '../utils/searchUtils';
import { paginatePosts, getTotalPages } from '../utils/paginationUtils';
import HeroSection from '../components/home/HeroSection';
import FeaturedPosts from '../components/featured/FeaturedPosts';
import FilterSection from '../components/home/FilterSection';
import PostGrid from '../components/home/PostGrid';
import Pagination from '../components/navigation/Pagination';
import ScrollReveal from '../components/animations/ScrollReveal';

const POSTS_PER_PAGE = 6;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [...new Set(posts.map(post => post.category))];
  const allTags = [...new Set(posts.flatMap(post => post.tags))];

  const filteredPosts = useMemo(() => 
    filterPosts(posts, searchTerm, selectedTags, selectedCategory),
    [searchTerm, selectedTags, selectedCategory]
  );

  const totalPages = getTotalPages(filteredPosts.length, POSTS_PER_PAGE);
  const currentPosts = paginatePosts(filteredPosts, currentPage, POSTS_PER_PAGE);

  const handleTagSelect = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  return (
    <div>
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScrollReveal animation="slideUp">
          <FeaturedPosts posts={posts} />
        </ScrollReveal>

        <ScrollReveal animation="fade" delay={0.2}>
          <FilterSection
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            tags={allTags}
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
          />
        </ScrollReveal>

        <ScrollReveal animation="slideUp" delay={0.3}>
          <PostGrid posts={currentPosts} />
        </ScrollReveal>

        <ScrollReveal animation="fade" delay={0.4}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </ScrollReveal>
      </div>
    </div>
  );
}