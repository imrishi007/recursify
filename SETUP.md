# 🚀 RECURSIFY 2.0 - Setup Guide

Welcome to RECURSIFY 2.0! This guide will help you get the project up and running.

## ✅ Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

## 📦 Installation

1. **Navigate to the project directory:**
   ```bash
   cd recursify-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🎨 Running the Development Server

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 🏗️ Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
recursify-react/
├── public/
│   └── logo.svg              # App logo
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── ProblemCard/
│   │   ├── FilterBar/
│   │   └── CodeBlock/
│   ├── context/
│   │   └── ThemeContext.jsx  # Theme provider
│   ├── data/
│   │   └── blogPosts.js      # Blog post metadata
│   ├── hooks/
│   │   └── useLocalStorage.js # Custom hooks
│   ├── pages/
│   │   ├── Home.jsx          # Homepage
│   │   ├── BlogPost.jsx      # Blog post template
│   │   └── posts/            # Individual blog posts
│   ├── styles/
│   │   ├── global.css        # Global styles
│   │   └── prism.css         # Code syntax highlighting
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Features

### ✨ Core Features
- ⚡ Lightning-fast React 18 + Vite
- 🎨 Minimal black & white design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive
- 🔍 Search and filter problems
- 💾 Bookmark favorite problems
- ✅ Track completed problems
- 🎨 Beautiful syntax highlighting

### 🎨 Design Highlights
- Typography-first approach
- High contrast for readability
- Clean, minimal interface
- Smooth transitions and animations
- Accessible keyboard navigation

## 🔧 Customization

### Adding New Blog Posts

1. **Add post metadata** to `src/data/blogPosts.js`:
   ```javascript
   {
     id: 6,
     number: 123,
     title: "Your Problem Title",
     difficulty: "Medium",
     excerpt: "Brief description",
     slug: "your-problem-slug",
     tags: ["Array", "Hash Table"],
     readTime: 10,
     leetcodeUrl: "https://leetcode.com/problems/..."
   }
   ```

2. **Create post content** at `src/pages/posts/your-problem-slug.jsx`:
   ```jsx
   import React from 'react';

   const YourProblem = ({ CodeBlock }) => {
     return (
       <>
         <section>
           <h2>Problem Statement</h2>
           <div className="content-box">
             <p>Your problem description...</p>
           </div>
         </section>
         
         <section>
           <h2>Solution</h2>
           <CodeBlock
             language="python"
             code={`your code here`}
           />
         </section>
       </>
     );
   };

   export default YourProblem;
   ```

### Changing Theme Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --bg-primary: #FFFFFF;
  --text-primary: #0A0A0A;
  --accent: #000000;
  /* ... more variables */
}

[data-theme="dark"] {
  --bg-primary: #0A0A0A;
  --text-primary: #FFFFFF;
  /* ... more variables */
}
```

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Vite will automatically try the next available port
# Or specify a different port in vite.config.js
```

**Dependencies not installing:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Check Node version (should be 16+)
node --version

# Update dependencies
npm update
```

## 📚 Tech Stack

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **Prism.js** - Syntax highlighting
- **CSS3** - Styling (no frameworks!)

## 🤝 Contributing

Want to add more problems or improve the design? Here's how:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- LeetCode for the amazing problems
- The React and Vite teams for excellent tools
- All contributors and users

## 💬 Support

For issues or questions:
- Open an issue on GitHub
- Contact: [Your Email]

---

**Built with ❤️ by Rishi Raval**

Happy Coding! 🚀
