import React from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import WhatWeDo from './WhatWeDo';
import StandOut from './StandOut';
import Certifications from './Certifications';
import Clients from './Clients';

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <StatsSection />
      <WhatWeDo />
      <StandOut />
      <Certifications />
      <Clients />
    </div>
  );
}

export default Home;
