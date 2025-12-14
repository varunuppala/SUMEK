import React from 'react';
import { Briefcase, Target, Award, Handshake, Mail } from 'lucide-react';

function Career({ setCurrentPage }) {
  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-container">
          <h1 className="career-hero-title">Join Our Team</h1>
          <p className="career-hero-description">
            Build your career with a leading aerospace and defense manufacturing company
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="career-benefits-section">
        <div className="career-container">
          <h2 className="section-title">Why work with us?</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><Briefcase size={36} strokeWidth={1.5} /></div>
              <h3 className="benefit-title">Career Growth</h3>
              <p className="benefit-description">Continuous learning and advancement opportunities</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon"><Target size={36} strokeWidth={1.5} /></div>
              <h3 className="benefit-title">Cutting-Edge Projects</h3>
              <p className="benefit-description">Work on advanced aerospace and defense technologies</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon"><Award size={36} strokeWidth={1.5} /></div>
              <h3 className="benefit-title">Competitive Benefits</h3>
              <p className="benefit-description">Industry-leading compensation and benefits package</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon"><Handshake size={36} strokeWidth={1.5} /></div>
              <h3 className="benefit-title">Collaborative Culture</h3>
              <p className="benefit-description">Work with experienced professionals in a supportive environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us for Opportunities Section */}
      <section className="career-cta-section">
        <div className="career-cta-container">
          <h2 className="career-cta-title">Interested in joining us?</h2>
          <p className="career-cta-description">
            We're always looking for talented individuals to join our team. Reach out to us to explore exciting career opportunities in aerospace and defense manufacturing.
          </p>
          <button 
            className="career-cta-button"
            onClick={() => setCurrentPage('contact')}
          >
            <Mail size={20} style={{ marginRight: '0.5rem' }} />
            Contact Us for Opportunities
          </button>
        </div>
      </section>
    </div>
  );
}

export default Career;
