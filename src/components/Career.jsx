import React from 'react';
import { Briefcase, Target, Award, Handshake } from 'lucide-react';

function Career() {
  const openings = [
    {
      id: 1,
      title: 'CNC Machine Operator',
      department: 'Production',
      experience: '2-5 years',
      location: 'Shamshabad, Telangana'
    },
    {
      id: 2,
      title: 'Quality Control Engineer',
      department: 'Quality Assurance',
      experience: '3-7 years',
      location: 'Shamshabad, Telangana'
    },
    {
      id: 3,
      title: 'Design Engineer',
      department: 'Engineering',
      experience: '1-3 years',
      location: 'Shamshabad, Telangana'
    },
    {
      id: 4,
      title: 'Production Manager',
      department: 'Operations',
      experience: '5-10 years',
      location: 'Shamshabad, Telangana'
    }
  ];

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
          <h2 className="section-title">Why Work With Us</h2>
          
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

      {/* Current Openings Section */}
      <section className="career-openings-section">
        <div className="career-container">
          <h2 className="section-title">Current Openings</h2>
          
          <div className="openings-list">
            {openings.map((opening) => (
              <div key={opening.id} className="opening-card">
                <div className="opening-header">
                  <h3 className="opening-title">{opening.title}</h3>
                  <span className="opening-badge">{opening.department}</span>
                </div>
                <div className="opening-details">
                  <div className="opening-detail">
                    <span className="detail-label">Experience:</span>
                    <span className="detail-value">{opening.experience}</span>
                  </div>
                  <div className="opening-detail">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{opening.location}</span>
                  </div>
                </div>
                <button className="opening-apply-btn">Apply Now →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="career-cta-section">
        <div className="career-cta-container">
          <h2 className="career-cta-title">Don't See Your Role?</h2>
          <p className="career-cta-description">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="career-cta-button">Submit Your Resume</button>
        </div>
      </section>
    </div>
  );
}

export default Career;
