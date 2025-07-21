import React from 'react';

function Clients() {
  const clients = [
    {
      name: 'Bharat Electronics',
      link: '#'
    },
    {
      name: 'DRDO',
      link: '#'
    },
    {
      name: 'Indian Navy',
      link: '#'
    },
    {
      name: 'Bharat Electronics',
      link: '#'
    },
    {
      name: 'DRDO',
      link: '#'
    }
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="clients-title">OUR TRUSTED CLIENTS</h2>
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
      </div>
    </section>
  );
}

export default Clients; 