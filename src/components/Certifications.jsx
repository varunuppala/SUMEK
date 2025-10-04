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
      title: 'AS9100',
      category: 'Aerospace',
      description: 'Aerospace quality management certification in progress, ensuring highest standards in aerospace manufacturing and supply chain management.'
    },
    {
      icon: '⚡',
      title: 'IEC',
      category: 'Standards',
      description: 'International Electrotechnical Commission standards compliance for electrical and electronic technologies used in manufacturing.'
    },
    {
      icon: '🇮🇳',
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
