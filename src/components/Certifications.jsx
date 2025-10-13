import React from 'react';
import { Award, BadgeCheck } from 'lucide-react';

function Certifications() {
  const certifications = [
    {
      icon: <Award size={32} strokeWidth={1.5} />,
      title: 'ISO 9001:2015',
      category: 'Quality',
      description: 'Quality Management Systems certification demonstrating commitment to consistent quality and customer satisfaction through rigorous processes.'
    },
    {
      icon: <BadgeCheck size={32} strokeWidth={1.5} />,
      title: 'UDYAM',
      category: 'MSME',
      description: 'Government of India MSME registration supporting Make in India initiative and promoting indigenous manufacturing capabilities.'
    }
  ];

  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <h3 className="certifications-title">Industry Certifications</h3>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card hover-3d">
              <div className="cert-header">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-category">{cert.category}</span>
                </div>
              </div>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
