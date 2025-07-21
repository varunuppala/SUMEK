import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IconButtons from './components/IconButtons';
import WhatWeDo from './components/WhatWeDo';
import StandOut from './components/StandOut';
import Clients from './components/Clients';
import Footer from './components/Footer';
import './utils/scrollAnimations.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <IconButtons />
      <WhatWeDo />
      <StandOut />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
