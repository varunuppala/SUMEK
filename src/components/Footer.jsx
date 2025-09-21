import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="footer-logo">
              <div className="footer-logo-icon">S&U</div>
              <span className="footer-company-name">MEK Engineers</span>
            </div>
            <p className="footer-description">
              Delivering precision engineering solutions in the most
              demanding sectors across the world. Your trusted partner
              for defense, aerospace, oil & gas, and energy projects.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">in</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">𝕏</span>
              </a>
              <a href="#" className="social-link" aria-label="Website">
                <span className="social-icon">🌐</span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#clients">Our Clients</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#news">News & Updates</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <p>123 Engineering Boulevard</p>
                <p>Tech District, City 12345</p>
                <p>United Kingdom</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:+441234567889" className="contact-link">+44 123 456 789</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:info@sumekengineers.com" className="contact-link">info@sumekengineers.com</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 S & U MEK Engineers Pvt Ltd. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 