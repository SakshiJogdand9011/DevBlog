export const filterPosts = (posts, searchTerm, selectedTags, selectedCategory) => {
  return posts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => post.tags.includes(tag));
    
    const matchesCategory = !selectedCategory || 
      post.category === selectedCategory;

    return matchesSearch && matchesTags && matchesCategory;
  });
};