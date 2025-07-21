import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home Page</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact US</h4>
            <p>Plot #2, street name, area</p>
            <p>Hyderabad, Telangana, 500000</p>
            <a href="mailto:info@sumek.com" className="contact-link">info@sumek.com</a>
            <p>+91 0000000000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 