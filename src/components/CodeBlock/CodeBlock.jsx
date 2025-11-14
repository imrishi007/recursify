import React, { useEffect, useState } from 'react';
import { useCopyToClipboard } from '../../hooks/useLocalStorage';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import '../../styles/prism.css';

// Component for single language code block
const CodeBlock = ({ code, language = 'python' }) => {
  const { copied, copy } = useCopyToClipboard();

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleCopy = () => {
    copy(code);
  };

  return (
    <div className="code-block-container">
      <div className="code-block-header">
        <span className="code-language">{language}</span>
        <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className={`language-${language}`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

// Component for multi-language code block with switcher
export const MultiLanguageCode = ({ codes }) => {
  const languages = Object.keys(codes);
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);
  const { copied, copy } = useCopyToClipboard();

  useEffect(() => {
    Prism.highlightAll();
  }, [activeLanguage]);

  const handleCopy = () => {
    copy(codes[activeLanguage]);
  };

  const languageLabels = {
    python: 'Python',
    cpp: 'C++',
    java: 'Java',
    javascript: 'JavaScript',
    c: 'C'
  };

  return (
    <div className="code-block-container multi-language">
      <div className="code-block-header">
        <div className="language-tabs">
          {languages.map(lang => (
            <button
              key={lang}
              className={`language-tab ${activeLanguage === lang ? 'active' : ''}`}
              onClick={() => setActiveLanguage(lang)}
            >
              {languageLabels[lang] || lang}
            </button>
          ))}
        </div>
        <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className={`language-${activeLanguage}`}>
        <code className={`language-${activeLanguage}`}>{codes[activeLanguage]}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
