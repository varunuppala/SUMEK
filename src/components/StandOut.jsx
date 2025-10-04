import React from 'react';
import { Ruler, Cog, Wrench, FlaskConical, CheckCircle2, Truck } from 'lucide-react';

function StandOut() {
  const capabilities = [
    {
      icon: <Ruler size={32} strokeWidth={1.5} />,
      title: 'Digital Design',
      category: 'Engineering',
      description: 'Advanced 3D modeling, CAD/CAM design, and digital prototyping for precision aerospace components.'
    },
    {
      icon: <Cog size={32} strokeWidth={1.5} />,
      title: 'Component Production',
      category: 'Manufacturing',
      description: '5-axis CNC machining, precision turning, milling, and advanced manufacturing of critical components.'
    },
    {
      icon: <Wrench size={32} strokeWidth={1.5} />,
      title: 'Integrated Assembly',
      category: 'Integration',
      description: 'Complete assembly solutions from individual components to full systems with rigorous testing.'
    },
    {
      icon: <FlaskConical size={32} strokeWidth={1.5} />,
      title: 'Composite Manufacturing',
      category: 'Advanced Materials',
      description: 'Cutting-edge carbon composite manufacturing for lightweight, high-strength aerospace applications.'
    },
    {
      icon: <CheckCircle2 size={32} strokeWidth={1.5} />,
      title: 'Quality Control',
      category: 'Quality Assurance',
      description: 'ISO 9001:2015 certified processes with comprehensive inspection and testing protocols.'
    },
    {
      icon: <Truck size={32} strokeWidth={1.5} />,
      title: 'Supply Chain Management',
      category: 'Logistics',
      description: 'Efficient material sourcing, inventory management, and on-time delivery for critical projects.'
    }
  ];

  return (
    <section className="stand-out-section">
      <div className="stand-out-container">
        <div className="stand-out-header">
          <div className="section-tag">WHY CHOOSE US</div>
          <h2 className="stand-out-title">How We Stand Out</h2>
          <p className="stand-out-subtitle">
            End-to-end engineering capabilities from design to delivery, backed by decades of aerospace expertise.
          </p>
        </div>
        
        <h3 className="capabilities-subtitle">Core Capabilities</h3>
        
        <div className="stand-out-grid">
          {capabilities.map((capability, index) => (
            <div key={index} className="capability-card hover-3d">
              <div className="capability-header">
                <div className="capability-icon">{capability.icon}</div>
                <div className="capability-info">
                  <h4 className="capability-title">{capability.title}</h4>
                  <span className="capability-category">{capability.category}</span>
                </div>
              </div>
              <p className="capability-description">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StandOut; 