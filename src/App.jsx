import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Products from './components/Products';
import Expansion from './components/Expansion';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import './utils/scrollAnimations.js';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'capabilities':
        return <Capabilities />;
      case 'products':
        return <Products />;
      case 'expansion':
        return <Expansion />;
      case 'career':
        return <Career />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="main-content">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
