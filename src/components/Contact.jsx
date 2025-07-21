import React from 'react';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Ready to discuss your project? Contact us today for a consultation.
        </p>
        
        <div className="contact-content">
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" placeholder="Your company name" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project requirements..." required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
          
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Our Location</h4>
                <p>Industrial Park, Sector 5<br />Hyderabad, Telangana 500032</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h4>Phone Number</h4>
                <p>+91 9876543210<br />+91 8765432109</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h4>Email Address</h4>
                <p>info@sumek.com<br />sales@sumek.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 