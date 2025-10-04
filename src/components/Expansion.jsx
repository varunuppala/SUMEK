import React from 'react';
import { Factory, Flame, Globe } from 'lucide-react';

function Expansion() {
  return (
    <div className="expansion-page">
      {/* Hero Section */}
      <section className="expansion-hero">
        <div className="expansion-hero-container">
          <h1 className="expansion-hero-title">Expansion Plans</h1>
          <p className="expansion-hero-description">
            Strategic growth initiatives to enhance our manufacturing capabilities and market reach
          </p>
        </div>
      </section>

      {/* Current Expansion Section */}
      <section className="expansion-current-section">
        <div className="expansion-container">
          <h2 className="section-title">Current Expansion Projects</h2>
          
          <div className="expansion-grid">
            <div className="expansion-card">
              <div className="expansion-icon"><Factory size={40} strokeWidth={1.5} /></div>
              <h3 className="expansion-card-title">New Manufacturing Facility</h3>
              <p className="expansion-card-description">
                Expanding production capacity with a state-of-the-art 50,000 sq. ft. facility
              </p>
              <div className="expansion-status">In Progress</div>
            </div>

            <div className="expansion-card">
              <div className="expansion-icon"><Flame size={40} strokeWidth={1.5} /></div>
              <h3 className="expansion-card-title">Composite Material Processing</h3>
              <p className="expansion-card-description">
                Advanced furnace systems for carbonization, graphitization, and siliconization
              </p>
              <div className="expansion-status">In Development</div>
            </div>

            <div className="expansion-card">
              <div className="expansion-icon"><Globe size={40} strokeWidth={1.5} /></div>
              <h3 className="expansion-card-title">Market Expansion</h3>
              <p className="expansion-card-description">
                Extending services to international aerospace and defense markets
              </p>
              <div className="expansion-status">Ongoing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="expansion-vision-section">
        <div className="expansion-container">
          <h2 className="section-title">Our Vision for Growth</h2>
          <div className="vision-content">
            <div className="vision-item">
              <div className="vision-number">2025</div>
              <p className="vision-text">Establish advanced furnace systems for carbonization and graphitization</p>
            </div>
            <div className="vision-item">
              <div className="vision-number">2026</div>
              <p className="vision-text">Complete siliconization capabilities - becoming one-stop C-SIC solution provider</p>
            </div>
            <div className="vision-item">
              <div className="vision-number">2027</div>
              <p className="vision-text">Achieve full vertical integration from raw material to final machined products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Expansion;
