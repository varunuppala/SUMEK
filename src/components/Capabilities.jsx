import React from 'react';

function Capabilities() {
  const productManagementProcess = [
    {
      step: 1,
      title: 'Concept',
      description: 'Initial project planning and requirements gathering',
      items: [
        'Customer requirements analysis',
        'Technical feasibility study',
        'Project scope definition',
        'Resource planning'
      ]
    },
    {
      step: 2,
      title: 'Design',
      description: 'Engineering design and development phase',
      items: [
        '3D CAD modeling',
        'Structural analysis',
        'Material selection',
        'Design optimization'
      ]
    },
    {
      step: 3,
      title: 'Development',
      description: 'Prototype development and testing',
      items: [
        'Prototype manufacturing',
        'Performance testing',
        'Design validation',
        'Process refinement'
      ]
    },
    {
      step: 4,
      title: 'Verification',
      description: 'Quality assurance and compliance verification',
      items: [
        'Quality control checks',
        'Compliance verification',
        'Safety assessments'
      ]
    },
    {
      step: 5,
      title: 'Pre-production',
      description: 'Pre-production setup and testing',
      items: [
        'Manufacturing setup',
        'Process validation',
        'Supply chain preparation'
      ]
    },
    {
      step: 6,
      title: 'Marketing Support',
      description: 'Technical marketing and customer support',
      items: [
        'Technical documentation',
        'Training materials',
        'Customer support setup'
      ]
    }
  ];

  const manufacturingCapabilities = [
    {
      title: 'Design Engineering',
      items: [
        '3D CAD Design (SolidWorks, AutoCAD)',
        'Finite Element Analysis (FEA)',
        'Computational Fluid Dynamics (CFD)',
        'Design for Manufacturing (DFM)',
        'Reverse Engineering',
        'Technical Documentation'
      ]
    },
    {
      title: 'Manufacturing Processes',
      items: [
        'CNC Machining (3, 4, 5-axis)',
        'Precision Grinding',
        'Sheet Metal Fabrication',
        'Welding & Joining',
        'Heat Treatment',
        'Surface Finishing'
      ]
    },
    {
      title: 'Quality Assurance',
      items: [
        'ISO 9001:2015 Certified',
        'AS9100 Aerospace Standard',
        'Non-Destructive Testing (NDT)',
        'Dimensional Inspection',
        'Material Testing',
        'Certification & Documentation'
      ]
    },
    {
      title: 'Industries Served',
      items: [
        'Defence & Military',
        'Aerospace',
        'Oil & Gas',
        'Energy & Power',
        'Marine & Offshore',
        'Industrial Equipment'
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
          <h2 className="section-title">Product Management Process</h2>
          <p className="section-description">
            Our structured approach ensures successful project delivery from initial concept to final product
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
          <h2 className="section-title">Manufacturing Capabilities</h2>
          <p className="section-description">
            Comprehensive manufacturing solutions with advanced equipment and processes
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
