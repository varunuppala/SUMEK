import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-tagline">DRIVEN BY PRECISION. DEFINED BY INNOVATION</div>
        <h1 className="hero-title">
          <span className="hero-title-line-1">S & U MEK</span>
          <span className="hero-title-line-2">Engineers</span>
        </h1>
        <p className="hero-description">
          From precision machining to advanced carbon composite manufacturing - delivering complete 
          solutions for aerospace and defense sectors with unmatched quality, speed, and consistency.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn hero-btn-primary">
            Explore Our Work <span className="arrow">→</span>
          </button>
          <button className="hero-btn hero-btn-secondary">
            <span className="play-icon">▶</span> Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 