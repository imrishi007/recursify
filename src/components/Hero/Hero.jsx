import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProblems = () => {
    const problemsSection = document.getElementById('problems');
    if (problemsSection) {
      problemsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">RECURSIFY</h1>
          <p className="hero-subtitle">Master DSA through Practice</p>
          <p className="hero-description">
            Clear explanations, step-by-step solutions, and optimized approaches
            for LeetCode problems. Learn by doing.
          </p>
          <button className="hero-cta" onClick={scrollToProblems}>
            Explore Problems
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
