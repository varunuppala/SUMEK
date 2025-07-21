import React from 'react';

function IconButtons() {
  return (
    <section className="icon-buttons-section">
      <div className="icon-buttons-container">
        <button className="icon-button hover-3d">
          <div className="icon-button-icon">🛡️⭐</div>
          <div className="icon-button-label">Defence</div>
        </button>
        <button className="icon-button hover-3d">
          <div className="icon-button-icon">✈️</div>
          <div className="icon-button-label">Aerospace</div>
        </button>
      </div>
    </section>
  );
}

export default IconButtons; 