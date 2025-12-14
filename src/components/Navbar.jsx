import React, { useState, useEffect } from 'react';

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
          <img src="/Name-log-new-3.png" alt="S&U MEK Engineers" className="navbar-logo-img" />
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'active' : ''}>About</button></li>
          <li><button onClick={() => setCurrentPage('capabilities')} className={currentPage === 'capabilities' ? 'active' : ''}>Capabilities</button></li>
          <li><button onClick={() => setCurrentPage('products')} className={currentPage === 'products' ? 'active' : ''}>Products</button></li>
          {/* Hidden for now - uncomment to show Expansion link */}
          {/* <li><button onClick={() => setCurrentPage('expansion')} className={currentPage === 'expansion' ? 'active' : ''}>Expansion</button></li> */}
          <li><button onClick={() => setCurrentPage('career')} className={currentPage === 'career' ? 'active' : ''}>Career</button></li>
          <li><button onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact Us</button></li>
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