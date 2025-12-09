import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Abilities from './components/Abilities';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 selection:bg-red-900 selection:text-white overflow-x-hidden">
      <Hero />
      <About />
      <Gallery />
      <Abilities />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;