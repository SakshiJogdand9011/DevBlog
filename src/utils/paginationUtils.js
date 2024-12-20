export const paginatePosts = (posts, currentPage, postsPerPage) => {
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return posts.slice(startIndex, endIndex);
};

export const getTotalPages = (totalPosts, postsPerPage) => {
  return Math.ceil(totalPosts / postsPerPage);
};