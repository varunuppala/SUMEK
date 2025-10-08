import React from 'react';

function Clients() {
  // Get the base URL from Vite config (handles GitHub Pages deployment)
  const baseUrl = import.meta.env.BASE_URL;
  
  const clients = [
    { name: 'DRDO', logo: `${baseUrl}DRDO.png`, link: '#' },
    { name: 'ISRO', logo: `${baseUrl}ISRO.png`, link: '#' },
    { name: 'HAL', logo: `${baseUrl}HAL.png`, link: '#' },
    { name: 'BHEL', logo: `${baseUrl}BHEL.png`, link: '#' },
    { name: 'BEML', logo: `${baseUrl}BEML.png`, link: '#' },
    { name: 'NSIL', logo: `${baseUrl}NSIL.png`, link: '#' },
    { name: 'BDL', logo: `${baseUrl}BDL.png`, link: '#' },
    { name: 'MIDHANI', logo: `${baseUrl}MIDHANI.png`, link: '#' }
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
                alt={`${client.name} logo`}
                className="client-logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.error(`Failed to load image: ${client.logo}`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients; 