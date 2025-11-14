import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostBySlug, blogPosts } from '../data/blogPosts';
import { useBookmarks, useProgress } from '../hooks/useLocalStorage';
import CodeBlock, { MultiLanguageCode } from '../components/CodeBlock/CodeBlock';
import './BlogPost.css';

// Import all blog post components
import CountHillsAndValleys from './posts/count-hills-and-valleys';
import CountMaxBitwiseOr from './posts/count-max-bitwise-or';
import MaxConsecutiveOnesIII from './posts/max-consecutive-ones-iii';
import ReverseInteger from './posts/reverse-integer';
import SudokuSolver from './posts/sudoku-solver';
import IncrementSubmatricesByOne from './posts/increment-submatrices-by-one';
import ZigZagConversion from './posts/zigzag-conversion';

// Map slugs to components
const postComponents = {
  'count-hills-and-valleys': CountHillsAndValleys,
  'count-max-bitwise-or': CountMaxBitwiseOr,
  'max-consecutive-ones-iii': MaxConsecutiveOnesIII,
  'reverse-integer': ReverseInteger,
  'sudoku-solver': SudokuSolver,
  'increment-submatrices-by-one': IncrementSubmatricesByOne,
  'zigzag-conversion': ZigZagConversion,
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { isCompleted, toggleCompleted } = useProgress();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="not-found">
        <h1>Problem Not Found</h1>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  const bookmarked = isBookmarked(post.id);
  const completed = isCompleted(post.id);

  // Find next and previous posts
  const sortedPosts = [...blogPosts].sort((a, b) => a.number - b.number);
  const currentIndex = sortedPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  // Get the blog post component
  const BlogContent = postComponents[slug];

  return (
    <div className="blog-post">
      <div className="post-container">
        <div className="post-breadcrumb">
          <Link to="/">← Back to Problems</Link>
        </div>

        <header className="post-header">
          <div className="post-meta-top">
            <span className="post-number">#{post.number}</span>
            <span className={`difficulty-badge difficulty-${post.difficulty.toLowerCase()}`}>
              {post.difficulty}
            </span>
            <a 
              href={post.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-link"
            >
              View on LeetCode
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>

          <div className="post-meta-bottom">
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <div className="post-actions">
              <button
                className={`action-btn icon-only ${completed ? 'active' : ''}`}
                onClick={() => toggleCompleted(post.id)}
                title={completed ? 'Mark as incomplete' : 'Mark as complete'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </button>
              <button
                className={`action-btn icon-only ${bookmarked ? 'active' : ''}`}
                onClick={() => toggleBookmark(post.id)}
                title={bookmarked ? 'Remove bookmark' : 'Bookmark'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill={bookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <article className="post-content">
          <BlogContent CodeBlock={CodeBlock} MultiLanguageCode={MultiLanguageCode} />
        </article>

        <nav className="post-navigation">
          {prevPost ? (
            <Link to={`/problem/${prevPost.slug}`} className="nav-link prev">
              <span className="nav-label">← Previous</span>
              <span className="nav-title">#{prevPost.number} {prevPost.title}</span>
            </Link>
          ) : (
            <div></div>
          )}
          {nextPost ? (
            <Link to={`/problem/${nextPost.slug}`} className="nav-link next">
              <span className="nav-label">Next →</span>
              <span className="nav-title">#{nextPost.number} {nextPost.title}</span>
            </Link>
          ) : (
            <div></div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default BlogPost;
