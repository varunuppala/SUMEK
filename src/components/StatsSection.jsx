import React from 'react';

function StatsSection() {
  const stats = [
    {
      number: '25+',
      label: 'Years Experience'
    },
    {
      number: '500+',
      label: 'Projects Delivered'
    },
    {
      number: '50+',
      label: 'Global Clients'
    },
    {
      number: '4',
      label: 'Key Sectors'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
