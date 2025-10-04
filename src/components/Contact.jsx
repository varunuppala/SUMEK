import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">
            Get in touch with our team for inquiries, quotes, or partnership opportunities
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="contact-content-section">
        <div className="contact-main-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Send us a Message</h2>
              <p className="contact-form-subtitle">Fill out the form below and we'll get back to you shortly</p>
              
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@company.com" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    placeholder="Your Company Name" 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="contact-submit-btn">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-wrapper">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-subtitle">Reach out to us through any of these channels</p>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={24} strokeWidth={1.5} /></div>
                  <div className="contact-info-content">
                    <h4>Location</h4>
                    <p>Plot 13, TSIIC Hardware Park 2<br />Shamshabad, Telangana 500005</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={24} strokeWidth={1.5} /></div>
                  <div className="contact-info-content">
                    <h4>Phone</h4>
                    <p>+91 9949946507</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Mail size={24} strokeWidth={1.5} /></div>
                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>info@sumek.in</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Globe size={24} strokeWidth={1.5} /></div>
                  <div className="contact-info-content">
                    <h4>Website</h4>
                    <p>www.sumek.in</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="business-hours">
                <h4>Business Hours</h4>
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 