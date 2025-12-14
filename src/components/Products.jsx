import React from 'react';
import { Plane, Shield, Zap } from 'lucide-react';

function Products() {
  const productCategories = [
    {
      id: 1,
      category: 'Aerospace Components',
      icon: <Plane size={32} strokeWidth={1.5} />,
      products: [
        { 
          name: 'Air Intake Assembly', 
          description: 'Complete air intake assembly solutions for aircraft systems with precision-engineered caps and integrated components',
          image: '/Air Intake Caps.png'
        },
        { 
          name: 'Turbine Blades', 
          description: 'High-precision turbine blades manufactured to aerospace standards for optimal performance',
          image: '/turbine-blades-new.png'
        },
        { 
          name: 'Panels with Stiffeners', 
          description: 'Riveted MOC - AA2014 panels with integrated stiffeners for structural applications',
          image: '/Panels with Stiffeners Rivetted.png'
        },
        { 
          name: 'Forged Part Machining', 
          description: 'Precision machining of forged aircraft components including complex geometries',
          image: '/Forged Aircraft Parts.png'
        },
        { 
          name: 'Air Frame', 
          description: 'Welded airframe structures with 100% radiography testing for aircraft applications',
          image: '/Air Frame.png'
        },
        { 
          name: 'Angle Rings', 
          description: 'High-precision angle rings for aircraft assembly and structural systems',
          image: '/Angle Rings.png'
        },
        { 
          name: 'Magnesium Alloy Castings', 
          description: 'Lightweight magnesium alloy casting machining for aerospace components',
          image: '/Magnesium Alloy Castings.png'
        }
      ]
    },
    {
      id: 2,
      category: 'Defense Components',
      icon: <Shield size={32} strokeWidth={1.5} />,
      products: [
        { 
          name: 'Nozzle Assemblies', 
          description: 'High-performance nozzle assemblies for rocket motors and propulsion systems',
          image: '/Nozzle Assembly.png'
        },
        { 
          name: 'Actuation Gear Box', 
          description: 'Precision-engineered actuation gear boxes for defense and aerospace applications',
          image: '/Actuation Gear Box.png'
        },
        { 
          name: 'C-SiC Jet Vanes', 
          description: 'Advanced carbon silicon carbide jet vanes for high-temperature thrust vectoring',
          image: '/C-SiC Jet Vanes.png'
        },
        { 
          name: 'C-SiC Throat Inserts', 
          description: 'High-temperature resistant C-SiC throat inserts for rocket motor nozzles',
          image: '/C-SiC Throat Inserts.png'
        },
        { 
          name: 'C-SiC Outboard Panels', 
          description: 'Lightweight and heat-resistant C-SiC outboard panels for aerospace vehicles',
          image: '/C-SiC Outboard Panels.png'
        },
        { 
          name: 'C-SiC Tiles', 
          description: 'Advanced C-SiC tiles for thermal protection and structural applications',
          image: '/C-SiC Tiles.png'
        },
        { 
          name: 'Steel Rocket Motor Castings', 
          description: 'Heavy-duty steel rocket motor castings for defense propulsion systems',
          image: '/Steel Rocket Motor Castings.png'
        }
      ]
    },
    {
      id: 3,
      category: 'Industrial & Power',
      icon: <Zap size={32} strokeWidth={1.5} />,
      products: [
        { 
          name: 'Steam Turbine Regulation Assembly', 
          description: 'Complete turbine regulation assemblies for power generation and industrial applications',
          image: '/Steam Turbine Regulation Assembly .png'
        },
        { 
          name: 'Turbine Pump Impeller', 
          description: 'Precision-machined pump impellers for high-efficiency fluid transfer systems',
          image: '/Turbine Pump Impeller.png'
        },
        { 
          name: 'Steam Turbine Blades', 
          description: 'High-performance steam turbine blades for power generation equipment',
          image: '/Steam Turbine Blades.png'
        },
        { 
          name: 'Industrial Turbine Blades', 
          description: 'Precision-engineered turbine blades for high-temperature alloys and critical rotating assemblies in oil, gas, and power generation',
          image: '/turbine-blades-new.png'
        },
        { 
          name: 'Precision Inserts', 
          description: 'Custom-machined inserts for various industrial and power generation applications',
          image: '/Inserts.png'
        }
      ]
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-container">
          <h1 className="products-hero-title">PRODUCTS</h1>
          <p className="products-hero-description">
            Precision-engineered components for aerospace, defense, and industrial applications
          </p>
        </div>
      </section>

      {/* Products by Category Section */}
      <section className="products-categories-section">
        <div className="products-categories-container">
          {productCategories.map((category) => (
            <div key={category.id} className="product-category-section">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h2 className="category-title">{category.category}</h2>
              </div>
              <div className="products-grid">
                {category.products.map((product, index) => (
                  <div key={index} className="product-card">
                    <div className="product-image-wrapper">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="product-image"
                      />
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </section>

      {/* Capabilities CTA Section */}
      <section className="products-cta-section">
        <div className="products-cta-container">
          <h2 className="products-cta-title">Need Custom Manufacturing?</h2>
          <p className="products-cta-description">
            We specialize in custom manufacturing solutions tailored to your specific requirements.
          </p>
          <button className="products-cta-button">Contact Us Today</button>
        </div>
      </section>
    </div>
  );
}

export default Products;
