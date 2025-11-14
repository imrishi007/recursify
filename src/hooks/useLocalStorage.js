import { useState, useEffect } from 'react';

// Hook for managing bookmarks
export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('recursify-bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('recursify-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (postId) => {
    setBookmarks(prev => {
      if (prev.includes(postId)) {
        return prev.filter(id => id !== postId);
      }
      return [...prev, postId];
    });
  };

  const isBookmarked = (postId) => {
    return bookmarks.includes(postId);
  };

  return { bookmarks, toggleBookmark, isBookmarked };
};

// Hook for managing completed problems
export const useProgress = () => {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('recursify-completed');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('recursify-completed', JSON.stringify(completed));
  }, [completed]);

  const toggleCompleted = (postId) => {
    setCompleted(prev => {
      if (prev.includes(postId)) {
        return prev.filter(id => id !== postId);
      }
      return [...prev, postId];
    });
  };

  const isCompleted = (postId) => {
    return completed.includes(postId);
  };

  const getCompletionRate = (totalProblems) => {
    return totalProblems > 0 ? Math.round((completed.length / totalProblems) * 100) : 0;
  };

  return { completed, toggleCompleted, isCompleted, getCompletionRate };
};

// Hook for copy to clipboard
export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      console.error('Failed to copy:', err);
      return false;
    }
  };

  return { copied, copy };
};
