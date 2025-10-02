import React from 'react';
import { ListFilter as Filter, X, Sparkles } from 'lucide-react';
import '../filter.css';

const Filters = ({ movies, genreFilter, yearFilter, ratingFilter, onFilterChange, onClearFilters }) => {
  const genres = [...new Set(movies.map(movie => movie.genre))].sort();
  const years = [...new Set(movies.map(movie => movie.releaseYear))].sort((a, b) => b - a);
  const ratings = ['9', '8', '7', '6', '5'];

  const hasActiveFilters = genreFilter || yearFilter || ratingFilter;

  return (
    <div className="filters">
      <div className="filter-group">
        <Sparkles size={22} />
        <span>🎭 Filtres magiques:</span>
      </div>
      
      <select 
        className="filter-select"
        value={genreFilter}
        onChange={(e) => onFilterChange('genre', e.target.value)}
      >
        <option value="">🎪 Tous les univers</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      <select 
        className="filter-select"
        value={yearFilter}
        onChange={(e) => onFilterChange('year', e.target.value)}
      >
        <option value="">📅 Toutes les époques</option>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <select 
        className="filter-select"
        value={ratingFilter}
        onChange={(e) => onFilterChange('rating', e.target.value)}
      >
        <option value="">⭐ Tous les niveaux</option>
        {ratings.map(rating => (
          <option key={rating} value={rating}>🌟 {rating}+ étoiles</option>
        ))}
      </select>

      {hasActiveFilters && (
        <button 
          className="clear-filters-btn"
          onClick={onClearFilters}
          title="Effacer tous les filtres"
        >
          
          🧹 Reset
        </button>
      )}
    </div>
  );
};

export default Filters;