import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import FilterBar from '../components/FilterBar/FilterBar';
import ProblemCard from '../components/ProblemCard/ProblemCard';
import { blogPosts, filterPosts } from '../data/blogPosts';
import './Home.css';

const Home = () => {
  const [filters, setFilters] = useState({
    difficulty: 'All',
    tag: null,
    search: ''
  });

  const filteredPosts = filterPosts(blogPosts, filters);

  return (
    <div className="home">
      <Hero />
      
      <section id="problems" className="problems-section">
        <div className="container-wide">
          <div className="section-header">
            <h2>LeetCode Solutions</h2>
            <p>Step-by-step explanations with optimized approaches</p>
          </div>

          <FilterBar
            filters={filters}
            setFilters={setFilters}
            totalProblems={blogPosts.length}
            filteredCount={filteredPosts.length}
          />

          <div className="problems-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <ProblemCard key={post.id} post={post} />
              ))
            ) : (
              <div className="no-results">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <h3>No problems found</h3>
                <p>Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
