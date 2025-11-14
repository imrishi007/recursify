// Blog Posts Data
export const blogPosts = [
  {
    id: 1,
    number: 7,
    title: "Reverse Integer",
    difficulty: "Medium",
    excerpt: "Reverse digits of a 32-bit integer while handling overflow conditions.",
    slug: "reverse-integer",
    tags: ["Math", "Integer"],
    readTime: 8,
    leetcodeUrl: "https://leetcode.com/problems/reverse-integer"
  },
  {
    id: 2,
    number: 1004,
    title: "Max Consecutive Ones III",
    difficulty: "Medium",
    excerpt: "Find the maximum number of consecutive 1's in a binary array if you can flip at most k 0's.",
    slug: "max-consecutive-ones-iii",
    tags: ["Array", "Sliding Window"],
    readTime: 7,
    leetcodeUrl: "https://leetcode.com/problems/max-consecutive-ones-iii"
  },
  {
    id: 3,
    number: 37,
    title: "Sudoku Solver",
    difficulty: "Hard",
    excerpt: "Solve a Sudoku puzzle by filling empty cells using a backtracking algorithm.",
    slug: "sudoku-solver",
    tags: ["Backtracking", "Matrix", "DFS"],
    readTime: 12,
    leetcodeUrl: "https://leetcode.com/problems/sudoku-solver"
  },
  {
    id: 4,
    number: 2210,
    title: "Count Hills and Valleys in an Array",
    difficulty: "Easy",
    excerpt: "Count the number of hills and valleys in an array by checking neighbors and skipping equal values.",
    slug: "count-hills-and-valleys",
    tags: ["Array", "Simulation"],
    readTime: 6,
    leetcodeUrl: "https://leetcode.com/problems/count-hills-and-valleys-in-an-array"
  },
  {
    id: 5,
    number: 2044,
    title: "Count Number of Maximum Bitwise-OR Subsets",
    difficulty: "Medium",
    excerpt: "Count the number of subsets whose bitwise OR equals the maximum possible OR of the array.",
    slug: "count-max-bitwise-or",
    tags: ["Array", "Bit Manipulation", "Backtracking", "Dynamic Programming"],
    readTime: 9,
    leetcodeUrl: "https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets"
  },
  {
    id: 6,
    number: 2536,
    title: "Increment Submatrices by One",
    difficulty: "Medium",
    excerpt: "Learn the prefix sum technique to efficiently increment submatrices in a 2D array using range queries.",
    slug: "increment-submatrices-by-one",
    tags: ["Array", "Matrix", "Prefix Sum"],
    readTime: 8,
    leetcodeUrl: "https://leetcode.com/problems/increment-submatrices-by-one"
  },
  {
    id: 7,
    number: 6,
    title: "ZigZag Conversion",
    difficulty: "Medium",
    excerpt: "Write a string in zigzag pattern across given rows and return it by reading row-wise from left to right.",
    slug: "zigzag-conversion",
    tags: ["String", "Simulation"],
    readTime: 7,
    leetcodeUrl: "https://leetcode.com/problems/zigzag-conversion"
  }
];

// Helper function to get difficulty class
export const getDifficultyClass = (difficulty) => {
  return `difficulty-${difficulty.toLowerCase()}`;
};

// Helper function to get all unique tags
export const getAllTags = () => {
  const tags = new Set();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

// Helper function to filter posts
export const filterPosts = (posts, filters) => {
  let filtered = [...posts];
  
  // Filter by difficulty
  if (filters.difficulty && filters.difficulty !== 'All') {
    filtered = filtered.filter(post => post.difficulty === filters.difficulty);
  }
  
  // Filter by tag
  if (filters.tag && filters.tag !== 'All') {
    filtered = filtered.filter(post => post.tags.includes(filters.tag));
  }
  
  // Filter by search query
  if (filters.search && filters.search.trim() !== '') {
    const query = filters.search.toLowerCase().trim();
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.number.toString().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  return filtered;
};

// Get post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};
