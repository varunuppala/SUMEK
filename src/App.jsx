import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <Footer />
    </div>
  );
}

export default App;
