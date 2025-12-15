import React from 'react';
import { Linkedin, Mail, MapPin, Phone, Globe } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="footer-logo">
              <img src="/FullLogoFinal.png" alt="S&U MEK Engineers" className="footer-logo-img" />
            </div>
            <p className="footer-description">
              A trusted partner in aerospace and defense manufacturing offering
              end-to-end solutions from precision machining to advanced carbon
              composites production. Fully designed, developed, and made in India.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/s-u-mek-engineers-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="mailto:info@sumek.in" className="social-link" aria-label="Email">
                <Mail size={20} strokeWidth={1.5} />
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
              <div className="contact-details">
                <a href="tel:+919949946507" className="contact-link" style={{ display: 'block' }}>+91 9949946507</a>
                <a href="tel:+918886144000" className="contact-link" style={{ display: 'block' }}>+91 8886144000</a>
              </div>
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