import React from 'react';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Air Intake Caps',
      image: '/api/placeholder/300/250',
      description: 'Precision-engineered air intake caps for aerospace applications'
    },
    {
      id: 2,
      name: 'Panels with Stiffeners',
      image: '/api/placeholder/300/250',
      description: 'Riveted MOC - AA2014 panels with integrated stiffeners'
    },
    {
      id: 3,
      name: 'ANGLE Rings',
      image: '/api/placeholder/300/250',
      description: 'High-precision angle rings for aircraft systems'
    },
    {
      id: 4,
      name: 'Air Intake Assembly',
      image: '/api/placeholder/300/250',
      description: 'Complete air intake assembly solutions'
    },
    {
      id: 5,
      name: 'Magnesium Alloy Castings',
      image: '/api/placeholder/300/250',
      description: 'Machining of magnesium alloy castings'
    },
    {
      id: 6,
      name: 'Forged Aircraft Parts',
      image: '/api/placeholder/300/250',
      description: 'Machining of forged aircraft parts'
    },
    {
      id: 7,
      name: 'Steam Turbine Regulation Assembly',
      image: '/api/placeholder/300/250',
      description: 'Complete turbine regulation assemblies'
    },
    {
      id: 8,
      name: 'T5 CD V6 Welded Airframe',
      image: '/api/placeholder/300/250',
      description: '100% radiography tested welded airframes'
    },
    {
      id: 9,
      name: 'Inserts',
      image: '/api/placeholder/300/250',
      description: 'Precision-machined inserts for various applications'
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-container">
          <h1 className="products-hero-title">PRODUCTS</h1>
          <p className="products-hero-description">
            Precision-engineered components for aerospace and defense applications
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="products-grid-section">
        <div className="products-grid-container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <div className="product-image-placeholder">
                    <span className="product-icon">🔧</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="products-footer">
            <p className="products-more-text">AND MORE...</p>
          </div>
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
