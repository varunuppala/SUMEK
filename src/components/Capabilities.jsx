import React from 'react';

function Capabilities() {
  const productManagementProcess = [
    {
      step: 1,
      title: 'Digital Design',
      description: 'Research & Development with advanced digital tools',
      items: [
        '3D Modelling',
        '3D Scanning',
        '3D Printing',
        'Prototype development',
        'Material R&D',
        'Machining R&D'
      ]
    },
    {
      step: 2,
      title: 'Component Production',
      description: 'Critical components produced using precision techniques',
      items: [
        'Programmers',
        'Operators',
        'Assembly optimization',
        'Fitters & Welders',
        'Fixture and tool development',
        'Maintenance'
      ]
    },
    {
      step: 3,
      title: 'Integrated Assembly',
      description: 'Assemble components with strict quality checks',
      items: [
        'Component assembly',
        'Performance tests',
        'Quality validation',
        'Safety and durability checks',
        'Compliance verification'
      ]
    },
    {
      step: 4,
      title: 'Quality Control & Assurance',
      description: 'Comprehensive quality assurance processes',
      items: [
        'Validation',
        'IPQC (In-Process Quality Control)',
        'FIA (First Inspection Article)',
        'CMM (Coordinate Measuring Machine)',
        'ISO 9001:2015',
        'AS9100 (in progress)'
      ]
    }
  ];

  const manufacturingCapabilities = [
    {
      title: 'Advanced Machining',
      items: [
        '5-axis VMC (Vertical Machining Center)',
        'UMC (Universal Machining Center)',
        'HMC (Horizontal Machining Center)',
        'EDM (Electrical Discharge Machining)',
        '4 & 5-axis CNC',
        'Lathe'
      ]
    },
    {
      title: 'Materials & Composites',
      items: [
        'C-SIC (Carbon-Silicon Carbide)',
        'FRP (Fiber Reinforced Polymer)',
        'Silica',
        'Graphite',
        'Titanium',
        'Chromium',
        'Nemonic',
        'Armour Steel',
        'Multiple Alloys',
        'Magnesium Alloy Castings'
      ]
    },
    {
      title: 'Processes',
      items: [
        'NDT (Non-Destructive Testing)',
        'Heat Treatment',
        'Assembly & Integration',
        'High Temperature Furnaces',
        'Precision Machining',
        'Carbonization',
        'Siliconization',
        'Graphitization'
      ]
    },
    {
      title: 'Certifications & Standards',
      items: [
        'ISO 9001:2015',
        'AS9100 (in progress)',
        'IEC',
        'UDYAM',
        '100% Radiography Welding',
        'Quality Management System'
      ]
    }
  ];

  const equipmentCategories = [
    {
      title: 'Machining Equipment',
      icon: '⚙️',
      expandable: true
    },
    {
      title: 'Fabrication Equipment',
      icon: '🔧',
      expandable: true
    },
    {
      title: 'Testing & Quality Equipment',
      icon: '🔬',
      expandable: true
    }
  ];

  const processFlow = [
    {
      icon: '🔧',
      title: 'Material Receiving',
      description: 'Incoming material inspection and verification'
    },
    {
      icon: '⚙️',
      title: 'Quality Inspection',
      description: 'Initial quality checks and material testing'
    },
    {
      icon: '🏭',
      title: 'Manufacturing Process',
      description: 'Precision manufacturing and fabrication'
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Final quality control and testing'
    },
    {
      icon: '📦',
      title: 'Final Delivery',
      description: 'Packaging and delivery to customer'
    }
  ];

  return (
    <div className="capabilities-page">
      {/* Hero Section */}
      <section className="capabilities-hero">
        <div className="capabilities-hero-container">
          <h1 className="capabilities-hero-title">Our Capabilities</h1>
          <p className="capabilities-hero-description">
            Advanced engineering solutions with state-of-the-art manufacturing capabilities,
            quality assurance, and comprehensive project management from concept to
            delivery.
          </p>
        </div>
      </section>

      {/* Product Management Process */}
      <section className="product-management-section">
        <div className="product-management-container">
          <h2 className="section-title">Core Processes</h2>
          <p className="section-description">
            Designing, Machining, and Assembling with Precision - from digital design to integrated assembly
          </p>
          
          <div className="process-grid">
            {productManagementProcess.map((process, index) => (
              <div key={index} className="process-card">
                <div className="process-header">
                  <div className="process-number">{process.step}</div>
                  <div className="process-info">
                    <h3 className="process-title">{process.title}</h3>
                    <p className="process-description">{process.description}</p>
                  </div>
                </div>
                <ul className="process-items">
                  {process.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="manufacturing-capabilities-section">
        <div className="manufacturing-capabilities-container">
          <h2 className="section-title">Advanced Production</h2>
          <p className="section-description">
            Revolutionizing Precision and Accuracy with state-of-the-art machining, materials, and processes
          </p>
          
          <div className="capabilities-grid">
            {manufacturingCapabilities.map((capability, index) => (
              <div key={index} className="capability-card">
                <h3 className="capability-title">{capability.title}</h3>
                <ul className="capability-items">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine & Fabrication Equipment */}
      <section className="equipment-section">
        <div className="equipment-container">
          <h2 className="section-title">Machine & Fabrication Equipment</h2>
          <p className="section-description">
            State-of-the-art machinery and equipment for precision manufacturing
          </p>
          
          <div className="equipment-list">
            {equipmentCategories.map((category, index) => (
              <div key={index} className="equipment-category">
                <div className="equipment-header">
                  <span className="equipment-icon">{category.icon}</span>
                  <span className="equipment-title">{category.title}</span>
                  {category.expandable && <span className="expand-arrow">›</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Flow */}
      <section className="process-flow-section">
        <div className="process-flow-container">
          <h2 className="section-title">Manufacturing Process Flow</h2>
          <p className="section-description">
            Streamlined processes for efficient and quality manufacturing
          </p>
          
          <div className="process-flow">
            {processFlow.map((step, index) => (
              <div key={index} className="flow-step">
                <div className="flow-icon">{step.icon}</div>
                <h3 className="flow-title">{step.title}</h3>
                <p className="flow-description">{step.description}</p>
                {index < processFlow.length - 1 && <div className="flow-connector">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Capabilities;
