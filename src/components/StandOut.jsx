import React from 'react';

function StandOut() {
  const features = [
    {
      icon: '✅',
      title: 'Quality Control',
      text: 'We follow robust quality systems are guided and validated pursuant to, inter alia, ISO 9001:2015, AS 9100:2016 and AS 13100 quality management systems with regular functioning, monitoring and continuous improvements in accordance per these standards.'
    },
    {
      icon: '🚚',
      title: 'Distribution And Logistics',
      text: 'Our commitment to delivering the goods on-time and at the right location stems out of our efficient logistics systems. We\'ve developed a strong logistics network comprising of logistics partners under our own procedures and policies.'
    },
    {
      icon: '⚙️',
      title: 'Supply Chain',
      text: 'Our supply chain is well integrated into ISO 9001:2015 and AS 9100:2016 management systems with regular functioning, monitoring and continuous improvements in accordance with these standards.'
    },
    {
      icon: '📢',
      title: 'Sales & Marketing',
      text: 'Our sales, business development and marketing teams serve as integral pillars within our growth function. Our professionals are dedicated to nurturing enduring, robust connections with the leadership teams of our valued clients.'
    }
  ];

  return (
    <section className="stand-out-section">
      <div className="stand-out-container">
        <h2 className="stand-out-title">HOW DO WE STAND OUT</h2>
        <div className="stand-out-grid">
          {features.map((feature, index) => (
            <div key={index} className="stand-out-card hover-3d">
              <div className="stand-out-card-icon">{feature.icon}</div>
              <h3 className="stand-out-card-title">{feature.title}</h3>
              <p className="stand-out-card-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StandOut; 