import React from 'react';

function Certifications() {
  const certifications = [
    {
      icon: '🏆',
      title: 'ISO 9001:2015',
      category: 'Quality',
      description: 'Quality Management Systems certification demonstrating commitment to consistent quality and customer satisfaction through rigorous processes.'
    },
    {
      icon: '✈️',
      title: 'AS9100D',
      category: 'Aerospace',
      description: 'Aerospace quality management certification ensuring highest standards in aerospace manufacturing and supply chain management.'
    },
    {
      icon: '🛢️',
      title: 'API Q1',
      category: 'Energy',
      description: 'Oil and gas industry quality management certification meeting stringent requirements for petroleum and natural gas operations.'
    },
    {
      icon: '🛡️',
      title: 'ISO 45001',
      category: 'Safety',
      description: 'Occupational Health and Safety Management Systems certification prioritizing worker safety and workplace protection standards.'
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
