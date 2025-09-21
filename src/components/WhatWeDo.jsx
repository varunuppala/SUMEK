import React, { useState } from 'react';

function WhatWeDo() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'defence',
      icon: '🛡️',
      title: 'DEFENCE',
      description: 'Advanced defense solutions',
      link: 'Learn more →',
      modalTitle: 'DEFENCE',
      modalSubtitle: 'Advanced defense solutions',
      modalDescription: 'We specialize in cutting-edge defense technologies and precision manufacturing for military applications, ensuring the highest standards of security and reliability in mission-critical environments.',
      keyCapabilities: [
        'Precision machining',
        'Secure supply chain',
        'Materials testing',
        'Quality assurance'
      ],
      applications: [
        'Aircraft components',
        'Naval systems',
        'Ground vehicles',
        'Communication systems'
      ],
      backgroundImage: '/api/placeholder/800/400'
    },
    {
      id: 'aerospace',
      icon: '✈️',
      title: 'AEROSPACE',
      description: 'Aerospace engineering excellence',
      link: 'Learn more →',
      modalTitle: 'AEROSPACE',
      modalSubtitle: 'Aerospace engineering excellence',
      modalDescription: 'Leading aerospace engineering solutions with focus on innovation, safety, and reliability for commercial and military aviation sectors worldwide.',
      keyCapabilities: [
        'Turbine manufacturing',
        'Flight-critical systems',
        'Composite materials',
        'AS9100D certified'
      ],
      applications: [
        'Aircraft engines',
        'Satellite components',
        'UAV systems',
        'Space equipment'
      ],
      backgroundImage: '/api/placeholder/800/400'
    },
    {
      id: 'oil-gas',
      icon: '🛢️',
      title: 'OIL & GAS',
      description: 'Energy sector expertise',
      link: 'Learn more →',
      modalTitle: 'OIL & GAS',
      modalSubtitle: 'Energy sector expertise',
      modalDescription: 'Comprehensive oil and gas solutions from upstream exploration to downstream processing with emphasis on safety, efficiency, and environmental compliance.',
      keyCapabilities: [
        'High-pressure components',
        'API certified processes',
        'Corrosion-resistant materials',
        'Environmental compliance'
      ],
      applications: [
        'Drilling equipment',
        'Pipeline systems',
        'Refinery components',
        'Offshore platforms'
      ],
      backgroundImage: '/api/placeholder/800/400'
    },
    {
      id: 'energy',
      icon: '⚡',
      title: 'ENERGY',
      description: 'Sustainable energy solutions',
      link: 'Learn more →',
      modalTitle: 'ENERGY',
      modalSubtitle: 'Sustainable energy solutions',
      modalDescription: 'Pioneering sustainable energy technologies including renewable energy systems and energy storage solutions for a cleaner, more efficient future.',
      keyCapabilities: [
        'Wind turbine components',
        'Energy storage solutions',
        'Solar mounting systems',
        'Grid integration'
      ],
      applications: [
        'Wind farms',
        'Solar installations',
        'Hydroelectric systems',
        'Battery storage'
      ],
      backgroundImage: '/api/placeholder/800/400'
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="what-we-do-section">
      <div className="what-we-do-container">
        <div className="what-we-do-header">
          <div className="section-tag">OUR SERVICES</div>
          <h2 className="what-we-do-title">What We Do</h2>
          <p className="what-we-do-subtitle">
            At S & U MEK we deliver precision engineering solutions in the most demanding sectors
            across the world.
          </p>
        </div>
        <div className="what-we-do-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card hover-3d" onClick={() => openModal(service)}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <span className="service-link">{service.link}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <div className="modal-background">
                <div className="modal-background-placeholder"></div>
              </div>
              <div className="modal-header-content">
                <h2 className="modal-title">{selectedService.modalTitle}</h2>
                <p className="modal-subtitle">{selectedService.modalSubtitle}</p>
              </div>
            </div>
            
            <div className="modal-body">
              <p className="modal-description">{selectedService.modalDescription}</p>
              
              <div className="modal-details">
                <div className="modal-section">
                  <h3>Key Capabilities:</h3>
                  <ul className="capabilities-list">
                    {selectedService.keyCapabilities.map((capability, index) => (
                      <li key={index}>• {capability}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-section">
                  <h3>Applications:</h3>
                  <div className="applications-tags">
                    {selectedService.applications.map((application, index) => (
                      <span key={index} className="application-tag">{application}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WhatWeDo; 