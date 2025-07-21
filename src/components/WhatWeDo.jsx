import React from 'react';

function WhatWeDo() {
  const services = [
    {
      icon: '🛡️⭐',
      title: 'Defence'
    },
    {
      icon: '✈️',
      title: 'Aerospace'
    },
    {
      icon: '🛢️',
      title: 'Oil & Gas'
    },
    {
      icon: '⚡🌊',
      title: 'Energy'
    }
  ];

  return (
    <section className="what-we-do-section">
      <div className="what-we-do-container">
        <div className="what-we-do-header">
          <h2 className="what-we-do-title">WHAT DO WE DO</h2>
          <p className="what-we-do-subtitle">
            At S & U MEK we deliver precision engineering solutions to the most demanding sectors across the globe.
          </p>
        </div>
        <div className="what-we-do-grid">
          {services.map((service, index) => (
            <button key={index} className="what-we-do-button hover-3d">
              <div className="what-we-do-icon">{service.icon}</div>
              <div className="what-we-do-label">{service.title}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo; 