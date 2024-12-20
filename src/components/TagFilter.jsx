export default function TagFilter({ tags, selectedTags, onTagSelect }) {
  const allTags = [...new Set(tags.flat())];

  return (
    <div className="flex flex-wrap gap-2">
      {allTags.map(tag => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`px-3 py-1 rounded-full text-sm ${
            selectedTags.includes(tag)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}