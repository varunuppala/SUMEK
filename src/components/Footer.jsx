import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home Page</li>
            <li>About</li>
            <li>Products</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact US</h4>
          <address>
            Plot #z, street name, area<br />
            Hyderabad, Telangana, 500000<br />
            info@sumek.com<br />
            +91 0000000000
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 