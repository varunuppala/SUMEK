import React from 'react';

function Clients() {
  const clients = [
    { name: 'DRDO', logo: '/DRDO.png', link: '#' },
    { name: 'ISRO', logo: '/ISRO.png', link: '#' },
    { name: 'HAL', logo: '/HAL.png', link: '#' },
    { name: 'BHEL', logo: '/BHEL.png', link: '#' },
    { name: 'BEML', logo: '/BEML.png', link: '#' },
    { name: 'NSIL', logo: '/NSIL.png', link: '#' },
    { name: 'BDL', logo: '/BDL.png', link: '#' },
    { name: 'MIDHANI', logo: '/MIDHANI.png', link: '#' }
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <div className="section-tag">OUR PARTNERS</div>
          <h2 className="clients-title">Trusted by India's Leading Organizations</h2>
          <p className="clients-subtitle">
            Proud partners of India's premier aerospace and defense organizations, delivering 
            precision engineering solutions for mission-critical applications.
          </p>
        </div>
        
        <div className="clients-logos">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-logo-wrapper hover-3d"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="client-logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients; 