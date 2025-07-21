import React from 'react';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About SUMEK</h2>
            <p>
              With over two decades of experience in precision engineering and manufacturing, 
              SUMEK has established itself as a trusted partner for industrial solutions. 
              We specialize in delivering high-quality mechanical engineering services that 
              meet the demanding requirements of modern industry.
            </p>
            <p>
              Our commitment to excellence, innovation, and customer satisfaction has made us 
              a leader in the field of industrial automation and precision manufacturing.
            </p>
            <ul className="about-features">
              <li>ISO 9001:2015 Certified Quality Management</li>
              <li>State-of-the-art Manufacturing Facility</li>
              <li>Experienced Team of Engineers</li>
              <li>24/7 Customer Support</li>
              <li>On-time Delivery Guarantee</li>
            </ul>
            <button className="btn-primary">Learn More</button>
          </div>
          <div className="about-image">
            <p>Manufacturing Facility Image</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 