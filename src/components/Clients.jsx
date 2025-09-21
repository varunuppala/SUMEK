import React from 'react';

function Clients() {
  const clients = [
    { name: 'B', link: '#' },
    { name: 'LM', link: '#' },
    { name: 'S', link: '#' },
    { name: 'EM', link: '#' },
    { name: 'GE', link: '#' },
    { name: 'RR', link: '#' }
  ];

  const trustStats = [
    {
      percentage: '100%',
      label: 'Client Satisfaction'
    },
    {
      percentage: '24/7',
      label: 'Support Coverage'
    },
    {
      percentage: 'ISO',
      label: 'Certified Quality'
    },
    {
      percentage: 'Global',
      label: 'Delivery Network'
    }
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <div className="section-tag">GLOBAL PARTNERS</div>
          <h2 className="clients-title">Trusted by Industry Leaders</h2>
          <p className="clients-subtitle">
            We collaborate with the world's leading companies to deliver exceptional engineering
            solutions across critical industries.
          </p>
        </div>
        
        <div className="clients-logos">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.link}
              className="client-logo hover-3d"
              target="_blank"
              rel="noopener noreferrer"
            >
              {client.name}
            </a>
          ))}
        </div>

        <div className="trust-stats">
          {trustStats.map((stat, index) => (
            <div key={index} className="trust-stat">
              <div className="trust-stat-number">{stat.percentage}</div>
              <div className="trust-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients; 