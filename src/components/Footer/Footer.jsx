import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>RECURSIFY</h3>
            <p>Master DSA through Practice</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/imrishi007"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              title="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/rishipraval/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              title="LeetCode"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818c.51.515 1.043.944 1.654 1.207a5.021 5.021 0 0 0 2.004.388 5.086 5.086 0 0 0 2.013-.403 5.484 5.484 0 0 0 1.702-1.211L11.7 16.4l7.312-7.312c.196-.196.4-.4.62-.606.203-.21.35-.467.349-.738.015-.282-.074-.558-.238-.792a1.348 1.348 0 0 0-.307-.418c-.37-.365-.936-.609-1.512-.609-.576 0-1.141.244-1.512.609L12.6 10.345 8.344 6.088a.915.915 0 0 1-.013-1.292.914.914 0 0 1 1.292-.013l4.012 4.013a.914.914 0 0 1 .013 1.292.915.915 0 0 1-1.292.013L8.344 6.088Z" />
              </svg>
              LeetCode
            </a>
            <a
              href="https://www.linkedin.com/in/rishipraval07/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} RECURSIFY™ — Built with ❤️ by Rishi Raval</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
