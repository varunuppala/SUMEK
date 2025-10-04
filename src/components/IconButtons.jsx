import React from 'react';
import { Shield, Plane } from 'lucide-react';

function IconButtons() {
  return (
    <section className="icon-buttons-section">
      <div className="icon-buttons-container">
        <button className="icon-button hover-3d">
          <div className="icon-button-icon"><Shield size={48} strokeWidth={1.5} /></div>
          <div className="icon-button-label">Defence</div>
        </button>
        <button className="icon-button hover-3d">
          <div className="icon-button-icon"><Plane size={48} strokeWidth={1.5} /></div>
          <div className="icon-button-label">Aerospace</div>
        </button>
      </div>
    </section>
  );
}

export default IconButtons; 