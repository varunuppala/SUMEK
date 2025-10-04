import React, { useState } from 'react';

function WhatWeDo() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'defence',
      icon: '🛡️⭐',
      title: 'DEFENCE',
      description: 'Advanced defense solutions',
      link: 'Learn more →',
      modalTitle: 'DEFENCE',
      modalSubtitle: 'Advanced defense solutions',
      modalDescription: 'We specialize in cutting-edge defense technologies and precision manufacturing for military applications, ensuring the highest standards of security and reliability in mission-critical environments. Trusted partner to DRDO, ASL, NSIL, RCI, BEML, and other defense organizations.',
      keyCapabilities: [
        'Precision machining for defense components',
        'Carbon composite manufacturing (C-SIC, FRP)',
        'Advanced materials: Titanium, Chromium, Nemonic, Armour Steel',
        'ISO 9001:2015 & AS9100 (in progress)'
      ],
      applications: [
        'Nozzle Assembly',
        'Turbine Blades',
        'Forged Aircraft Parts',
        'Defense System Components'
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
      modalDescription: 'Leading aerospace engineering solutions from precision machining to complete product manufacturing. Partnering with ISRO, HAL, BHEL, and other aerospace organizations to deliver components for aircraft, satellites, and UAV systems with unmatched quality and reliability.',
      keyCapabilities: [
        '5-axis VMC, UMC, HMC, EDM, 4 & 5-axis CNC, Lathe',
        'Carbon composite materials manufacturing',
        '3D modeling, scanning, and printing',
        'NDT, heat treatment, precision machining'
      ],
      applications: [
        'Air Intake Caps & Assembly',
        'Turbine Pump Impellers',
        'Outboard Panels C-SIC',
        'Satellite Components',
        'UAV & Drone Parts'
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
            At S & U MEK we deliver precision engineering and complete product solutions for 
            aerospace and defense sectors - from raw material to finished product.
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