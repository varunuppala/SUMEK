import React, { useState, useEffect } from 'react';

// Feature flags - set to false to hide features
const FEATURE_FLAGS = {
  showInfrastructure: false,
  showCareers: false,
};

function Navbar({ currentPage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => setCurrentPage('home')}>
          <div className="logo">S&U</div>
          <span className="company-name">MEK Engineers</span>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'active' : ''}>About</button></li>
          <li><button onClick={() => setCurrentPage('capabilities')} className={currentPage === 'capabilities' ? 'active' : ''}>Capabilities</button></li>
          <li><button onClick={() => setCurrentPage('products')} className={currentPage === 'products' ? 'active' : ''}>Products</button></li>
          {FEATURE_FLAGS.showInfrastructure && (
            <li><button onClick={() => setCurrentPage('infrastructure')} className={currentPage === 'infrastructure' ? 'active' : ''}>Infrastructure</button></li>
          )}
          {FEATURE_FLAGS.showCareers && (
            <li><button onClick={() => setCurrentPage('careers')} className={currentPage === 'careers' ? 'active' : ''}>Careers</button></li>
          )}
          <li><button onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact us</button></li>
        </ul>
        <div className="navbar-actions">
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 