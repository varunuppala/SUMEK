import React from 'react';

function StandOut() {
  const capabilities = [
    {
      icon: '✅',
      title: 'Quality Control',
      category: 'Process',
      description: 'Complete precision machined solutions with ultra-precision and advanced manufacturing systems for all metal cutting and welding operations.'
    },
    {
      icon: '🚚',
      title: 'Distribution & Logistics',
      category: 'Operations',
      description: 'Strong partnerships and distributor networks for oil and gas chemicals, hydraulic systems, and comprehensive supply chain logistics.'
    },
    {
      icon: '⚙️',
      title: 'Supply Chain',
      category: 'Management',
      description: 'Deep partnerships with key OEMs offering end-to-end supply chain management services and strategic venture collaborations.'
    },
    {
      icon: '📈',
      title: 'Sales & Marketing',
      category: 'Business',
      description: 'Direct marketing to unique industries through advanced selling platforms providing relevant and advantageous client services.'
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