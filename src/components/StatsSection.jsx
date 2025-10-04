import React from 'react';

function StatsSection() {
  const stats = [
    {
      number: '30+',
      label: 'Years Experience'
    },
    {
      number: 'DRDO/HAL/BDL',
      label: 'Trusted Partner'
    },
    {
      number: '5-Axis',
      label: 'Machining'
    },
    {
      number: 'Advanced',
      label: 'Composites'
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
