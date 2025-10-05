import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      // EmailJS configuration
      // These will send emails to: karthik.gannaman@gmail.com
      const serviceId = 'service_qifujwn'; // ✅ Your EmailJS service ID
      const templateId = 'template_5gznllq'; // ✅ Your EmailJS template ID  
      const publicKey = 'UWJ7mC9VY-sjmpuoL'; // ✅ Your EmailJS public key

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      console.log('Email sent successfully:', result.text);
      
      // Success state
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
      });

      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: false, message: '' });
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Error state
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Oops! Something went wrong. Please try again or email us directly at info@sumek.in'
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: false, message: '' });
      }, 5000);
    }
  };

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
              
              <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status.submitting}
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
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status.submitting}
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
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status.submitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status.submitting}
                    required
                  ></textarea>
                </div>

                {/* Status Messages */}
                {status.message && (
                  <div className={`form-status ${status.submitted ? 'success' : 'error'}`}>
                    {status.submitted ? (
                      <CheckCircle size={20} strokeWidth={2} />
                    ) : (
                      <AlertCircle size={20} strokeWidth={2} />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="contact-submit-btn"
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    <>
                      <span className="btn-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} strokeWidth={2} />
                      Send Message
                    </>
                  )}
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