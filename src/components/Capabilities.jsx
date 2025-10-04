import React from 'react';
import { Flame, FlaskConical, Cog, Wrench, Settings, Factory, CheckCircle, Package, Target } from 'lucide-react';

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
        '100% Radiography'
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
        'IEC',
        'UDYAM',
        '100% Radiography Welding',
        'Quality Management System',
        'DRDO/HAL/BDL Approved'
      ]
    }
  ];

  const compositeManufacturing = [
    {
      title: 'Advanced Furnace Systems',
      icon: <Flame size={32} strokeWidth={1.5} />,
      description: 'High-temperature furnaces for composite material processing',
      items: [
        'Carbonization Furnaces',
        'Graphitization Furnaces',
        'Siliconization Equipment',
        'Heat Treatment Systems',
        'Temperature Control Systems'
      ]
    },
    {
      title: 'Composite Processing',
      icon: <FlaskConical size={32} strokeWidth={1.5} />,
      description: 'Complete material transformation capabilities',
      items: [
        'Carbonization Process',
        'Graphitization Process',
        'Siliconization Process',
        'C-SIC Material Development',
        'Material Testing & Validation'
      ]
    },
    {
      title: 'Precision Machining',
      icon: <Cog size={32} strokeWidth={1.5} />,
      description: 'Raw material to final product machining',
      items: [
        '5-Axis CNC Machining',
        'Composite Material Machining',
        'Custom Specification Manufacturing',
        'Final Product Finishing',
        'Quality Inspection'
      ]
    }
  ];

  const processFlow = [
    {
      icon: <Wrench size={24} strokeWidth={1.5} />,
      title: 'Material Receiving',
      description: 'Incoming material inspection and verification'
    },
    {
      icon: <Settings size={24} strokeWidth={1.5} />,
      title: 'Quality Inspection',
      description: 'Initial quality checks and material testing'
    },
    {
      icon: <Factory size={24} strokeWidth={1.5} />,
      title: 'Manufacturing Process',
      description: 'Precision manufacturing and fabrication'
    },
    {
      icon: <CheckCircle size={24} strokeWidth={1.5} />,
      title: 'Quality Assurance',
      description: 'Final quality control and testing'
    },
    {
      icon: <Package size={24} strokeWidth={1.5} />,
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

      {/* Composite Material Manufacturing */}
      <section className="equipment-section">
        <div className="equipment-container">
          <h2 className="section-title">Composite Material Manufacturing & Machining</h2>
          <p className="section-description">
            One-stop solution for complete composite material lifecycle - from raw material manufacturing 
            through carbonization, graphitization, and siliconization to final machined products
          </p>
          
          <div className="composite-manufacturing-grid">
            {compositeManufacturing.map((capability, index) => (
              <div key={index} className="composite-card">
                <div className="composite-header">
                  <span className="composite-icon">{capability.icon}</span>
                  <div>
                    <h3 className="composite-title">{capability.title}</h3>
                    <p className="composite-description">{capability.description}</p>
                  </div>
                </div>
                <ul className="composite-items">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="composite-highlight">
            <h3><Target size={24} strokeWidth={2} style={{ display: 'inline-block', marginRight: '0.5rem', verticalAlign: 'middle' }} /> Complete Material Solution</h3>
            <p>
              We provide an integrated approach to composite manufacturing - from material creation through 
              advanced thermal processes (carbonization, graphitization, siliconization) to precision machining 
              of raw materials into final products per customer specifications. This end-to-end capability makes 
              us a unique one-stop solution in the aerospace and defense industry.
            </p>
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
