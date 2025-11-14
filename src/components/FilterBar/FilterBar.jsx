import React from 'react';
import { getAllTags } from '../../data/blogPosts';
import './FilterBar.css';

const FilterBar = ({ filters, setFilters, totalProblems, filteredCount }) => {
  const tags = getAllTags();
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  return (
    <div className="filter-bar">
      <div className="filter-section">
        <label className="filter-label">Difficulty:</label>
        <div className="filter-buttons">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              className={`filter-btn ${filters.difficulty === difficulty ? 'active' : ''}`}
              onClick={() => setFilters({ ...filters, difficulty })}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Tag:</label>
        <select
          className="filter-select"
          value={filters.tag || 'All'}
          onChange={(e) => setFilters({ ...filters, tag: e.target.value === 'All' ? null : e.target.value })}
        >
          <option value="All">All Tags</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      <div className="filter-section search-section">
        <div className="search-wrapper">
          <input
            type="text"
            className="filter-search"
            placeholder="Search problems..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          {filters.search && (
            <button
              className="clear-search"
              onClick={() => setFilters({ ...filters, search: '' })}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="filter-results">
        <span>{filteredCount} of {totalProblems} problems</span>
      </div>
    </div>
  );
};

export default FilterBar;
