import React from 'react';
import { Link } from 'react-router-dom';
import { useBookmarks, useProgress } from '../../hooks/useLocalStorage';
import './ProblemCard.css';

const ProblemCard = ({ post }) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { isCompleted, toggleCompleted } = useProgress();
  
  const bookmarked = isBookmarked(post.id);
  const completed = isCompleted(post.id);

  const handleBookmark = (e) => {
    e.preventDefault();
    toggleBookmark(post.id);
  };

  const handleComplete = (e) => {
    e.preventDefault();
    toggleCompleted(post.id);
  };

  return (
    <article className={`problem-card ${completed ? 'completed' : ''}`}>
      <div className="card-header">
        <div className="card-meta">
          <span className="problem-number">#{post.number}</span>
          <span className={`difficulty-badge difficulty-${post.difficulty.toLowerCase()}`}>
            {post.difficulty}
          </span>
        </div>
        <div className="card-actions">
          <button
            className={`action-btn ${completed ? 'active' : ''}`}
            onClick={handleComplete}
            title={completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </button>
          <button
            className={`action-btn ${bookmarked ? 'active' : ''}`}
            onClick={handleBookmark}
            title={bookmarked ? 'Remove bookmark' : 'Bookmark'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={bookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
      </div>

      <Link to={`/problem/${post.slug}`} className="card-link">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-excerpt">{post.excerpt}</p>

        <div className="card-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="card-footer">
          <span className="read-time">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime} min read
          </span>
          <span className="read-more">
            Read Solution
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ProblemCard;
