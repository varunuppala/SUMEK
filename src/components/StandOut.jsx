import React from 'react';

function StandOut() {
  const capabilities = [
    {
      icon: '👥',
      title: 'Collaborative Teams',
      category: 'People',
      description: 'Managerial and skilled engineers collaborate seamlessly to deliver exceptional results, prioritizing customer satisfaction and continuous learning.'
    },
    {
      icon: '💡',
      title: 'Visionary Leadership',
      category: 'Leadership',
      description: 'Family-run organization with visionary leadership driving innovation, precision engineering excellence, and strategic growth in aerospace and defense.'
    },
    {
      icon: '📚',
      title: 'Digital Upskilling',
      category: 'Technology',
      description: 'Committed to continuous learning and adapting to latest technologies - from 3D modeling to advanced carbon composite manufacturing processes.'
    },
    {
      icon: '🛡️',
      title: 'Improved Safety & Training',
      category: 'Quality',
      description: 'Rigorous safety standards, comprehensive training programs, and ISO 9001:2015 certification ensuring highest quality and reliability.'
    }
  ];

  return (
    <section className="stand-out-section">
      <div className="stand-out-container">
        <div className="stand-out-header">
          <div className="section-tag">WHY CHOOSE US</div>
          <h2 className="stand-out-title">How We Stand Out</h2>
          <p className="stand-out-subtitle">
            Our comprehensive capabilities and industry certifications ensure exceptional quality and
            reliability in every project we undertake.
          </p>
        </div>
        
        <h3 className="capabilities-subtitle">Core Capabilities</h3>
        
        <div className="stand-out-grid">
          {capabilities.map((capability, index) => (
            <div key={index} className="capability-card hover-3d">
              <div className="capability-header">
                <div className="capability-icon">{capability.icon}</div>
                <div className="capability-info">
                  <h4 className="capability-title">{capability.title}</h4>
                  <span className="capability-category">{capability.category}</span>
                </div>
              </div>
              <p className="capability-description">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StandOut; 