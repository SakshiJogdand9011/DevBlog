import SearchBar from '../search/SearchBar';
import TagFilter from '../filters/TagFilter';
import CategoryFilter from '../filters/CategoryFilter';

export default function FilterSection({ 
  searchTerm, 
  onSearch, 
  categories, 
  selectedCategory, 
  onCategorySelect,
  tags,
  selectedTags,
  onTagSelect 
}) {
  return (
    <div className="mb-8 space-y-4">
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
      <div className="flex flex-col sm:flex-row gap-4">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={onCategorySelect}
        />
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={onTagSelect}
        />
      </div>
    </div>
  );
}