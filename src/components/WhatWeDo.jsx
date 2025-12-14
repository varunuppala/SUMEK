import React, { useState } from 'react';
import { Shield, Plane, Zap } from 'lucide-react';

function WhatWeDo() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'defence',
      icon: <Shield size={48} strokeWidth={1.5} />,
      title: 'DEFENCE',
      description: 'Engineering Strength for National Security',
      link: 'Learn more →',
      modalTitle: 'DEFENCE',
      modalSubtitle: 'Engineering Strength for National Security',
      modalDescription: 'Precision defines defense. At S&U Mek Engineers, we bring together advanced machining, materials science, and innovation to create components that serve India\'s most critical defense programs. From nozzles and turbine blades to forged airframe structures, every component is engineered for endurance, accuracy, and reliability. Our continuous collaboration with DRDO, ASL, RCI, NSIL, and BEML reflects our unwavering commitment to national security and technological excellence.',
      keyCapabilities: [
        'Precision machining & assembly for critical defense systems',
        'Advanced carbon composite manufacturing (C-SiC, Silica, FRP)',
        'High-performance materials — Titanium, Envar 32, Nickel alloys, Armour Steel etc.',
        'Certified to ISO 9001:2015 standards'
      ],
      applications: [
        'Nozzle Assembly',
        'Turbine Blades',
        'Forged Aircraft Parts',
        'Defense System Components'
      ],
      backgroundImage: '/defense-bg.jpg'
    },
    {
      id: 'aerospace',
      icon: <Plane size={48} strokeWidth={1.5} />,
      title: 'AEROSPACE',
      description: 'Engineering Precision for the Skies and Beyond',
      link: 'Learn more →',
      modalTitle: 'AEROSPACE',
      modalSubtitle: 'Engineering Precision for the Skies and Beyond',
      modalDescription: 'From the skies above to the edge of space, S&U MEK Engineers plays a vital role in India\'s aerospace ecosystem. Our expertise in precision machining and advanced composites powers aircraft, satellites, and UAV systems that define the future of flight. With a heritage of collaboration with ISRO, HAL, and other leading aerospace organizations, we bring innovation, speed, and consistency to every project — ensuring mission success with every component we deliver.',
      keyCapabilities: [
        'Advanced multi axis precision machining and assembly',
        'Carbon composite manufacturing',
        '3D modeling, 3D scanning, and rapid prototyping',
        'NDT, heat treatment, and high-accuracy inspection'
      ],
      applications: [
        'Air Intake Caps & Assembly',
        'Turbine Pump Impellers',
        'Outboard Panels C-SiC',
        'Satellite Components',
        'UAV & Drone Parts'
      ],
      backgroundImage: '/aerospace-bg.jpg'
    },
    {
      id: 'oil-power',
      icon: <Zap size={48} strokeWidth={1.5} />,
      title: 'OIL & POWER GENERATION',
      description: 'Engineered Reliability for the Energy Sector',
      link: 'Learn more →',
      modalTitle: 'OIL & POWER GENERATION',
      modalSubtitle: 'Engineered Reliability for the Energy Sector',
      modalDescription: 'S&U Mek Engineers delivers precision-engineered components that power the world\'s energy systems — from turbines and generators to high-performance pumps and valves. Our machining expertise and advanced material capabilities ensure durability, reliability, and efficiency in the most demanding oil, gas, and power generation environments. With decades of experience in high-temperature alloys and critical rotating assemblies, we help leading energy OEMs achieve long service life and zero failure performance.',
      keyCapabilities: [
        'Precision machining for turbines, generators, and energy assemblies',
        'Expertise in high-temperature and corrosion-resistant materials',
        'Custom-engineered components to meet industry specifications',
        'Rigorous quality control and performance validation'
      ],
      applications: [
        'Turbine Components',
        'Generator Parts',
        'Pump Components',
        'Heat Exchanger Parts',
        'Valve Components'
      ],
      backgroundImage: '/oil-power-bg.jpg'
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
            aerospace, defense, and oil & power generation sectors - from raw material to finished product.
          </p>
        </div>
        <div className="what-we-do-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card hover-3d" 
              onClick={() => openModal(service)}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${service.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
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
                <img 
                  src={selectedService.backgroundImage} 
                  alt={selectedService.modalTitle}
                  className="modal-background-image"
                />
                <div className="modal-background-overlay"></div>
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