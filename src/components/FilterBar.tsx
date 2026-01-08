import { memo } from 'react';
import '../styles/filter.scss';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedRating: number;
  onRatingChange: (rating: number) => void;
  sortOrder: 'asc' | 'desc' | null;
  onSortChange: (order: 'asc' | 'desc' | null) => void;
  totalProducts: number;
  filteredCount: number;
}

const FilterBar = memo(({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedRating,
  onRatingChange,
  sortOrder,
  onSortChange,
  totalProducts,
  filteredCount,
}: FilterBarProps) => {
  const handleSortClick = (order: 'asc' | 'desc') => {
    if (sortOrder === order) {
      onSortChange(null);
    } else {
      onSortChange(order);
    }
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar__group">
        <div className="filter-bar__item">
          <label className="filter-bar__label" htmlFor="category-filter">
            Category
          </label>
          <select
            id="category-filter"
            className="filter-bar__select"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-bar__item">
          <label className="filter-bar__label" htmlFor="rating-filter">
            Min Rating
          </label>
          <select
            id="rating-filter"
            className="filter-bar__select"
            value={selectedRating}
            onChange={(e) => onRatingChange(Number(e.target.value))}
          >
            <option value={0}>All Ratings</option>
            <option value={3}>3+ Stars</option>
            <option value={3.5}>3.5+ Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={4.5}>4.5+ Stars</option>
          </select>
        </div>

        <div className="filter-bar__item">
          <label className="filter-bar__label">Sort by Price</label>
          <div className="filter-bar__sort-buttons">
            <button
              className={`filter-bar__sort-btn ${sortOrder === 'asc' ? 'filter-bar__sort-btn--active' : ''}`}
              onClick={() => handleSortClick('asc')}
              aria-pressed={sortOrder === 'asc'}
            >
              Low <span className="arrow">↑</span>
            </button>
            <button
              className={`filter-bar__sort-btn ${sortOrder === 'desc' ? 'filter-bar__sort-btn--active' : ''}`}
              onClick={() => handleSortClick('desc')}
              aria-pressed={sortOrder === 'desc'}
            >
              High <span className="arrow">↓</span>
            </button>
          </div>
        </div>
      </div>

      <div className="filter-bar__results">
        Showing <span>{filteredCount}</span> of <span>{totalProducts}</span> products
      </div>
    </div>
  );
});

FilterBar.displayName = 'FilterBar';

export default FilterBar;
