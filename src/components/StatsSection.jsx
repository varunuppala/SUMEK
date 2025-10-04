import React from 'react';

function StatsSection() {
  const stats = [
    {
      number: '26+',
      label: 'Years Experience'
    },
    {
      number: 'ISO 9001',
      label: 'Certified'
    },
    {
      number: 'Make in India',
      label: 'Proud Partner'
    },
    {
      number: '2',
      label: 'Core Sectors'
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
