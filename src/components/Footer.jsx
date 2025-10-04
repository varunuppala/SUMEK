import React from 'react';
import { Linkedin, Mail, MapPin, Phone, Globe } from 'lucide-react';

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
              Delivering precision engineering and complete product solutions 
              for aerospace and defense sectors. From machining to carbon 
              composite manufacturing - proudly Make in India.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/sumek" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="mailto:info@sumek.in" className="social-link" aria-label="Email">
                <Mail size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.sumek.in" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Website">
                <Globe size={20} strokeWidth={1.5} />
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
              <span className="contact-icon"><MapPin size={18} strokeWidth={1.5} /></span>
              <div className="contact-details">
                <p>Plot 13, TSIIC Hardware Park 2</p>
                <p>Shamshabad, Telangana 500005</p>
                <p>India</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><Phone size={18} strokeWidth={1.5} /></span>
              <a href="tel:+919949946507" className="contact-link">+91 9949946507</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><Mail size={18} strokeWidth={1.5} /></span>
              <a href="mailto:info@sumek.in" className="contact-link">info@sumek.in</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><Globe size={18} strokeWidth={1.5} /></span>
              <a href="https://www.sumek.in" className="contact-link">www.sumek.in</a>
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