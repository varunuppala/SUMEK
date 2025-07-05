import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Logo Placeholder */}
        <div className="logo-placeholder"></div>
        <span className="company-name">S & U MEK</span>
      </div>
      <ul className="navbar-links">
        <li>ABOUT</li>
        <li>INFRASTRUCTURE</li>
        <li>PRODUCTS</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
  );
}

export default Navbar; 