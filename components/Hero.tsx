import React from 'react';
import { ChevronDownIcon } from './Icons';

const Hero: React.FC = () => {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="images/Deyneris.jpg" 
          alt="Daenerys Atmosphere" 
          className="w-full h-full object-cover opacity-60 grayscale-[0.5] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-obsidian"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-red-600 tracking-[0.3em] text-sm md:text-lg uppercase font-sans mb-4 animate-fade-in">
          Последняя из рода
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-black text-white mb-6 leading-tight drop-shadow-2xl">
          Дейнерис<br />
          <span className="text-red-700 text-glow">Таргариен</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-serif italic max-w-2xl mb-10 border-l-4 border-red-700 pl-6 text-left">
          "Я не хочу останавливать колесо. Я хочу сломать колесо."
        </p>
        
        {/* Button with "Rising Magma" Animation */}
        <a 
          href="#about"
          onClick={scrollToAbout}
          className="group relative px-10 py-4 bg-transparent border border-red-800 overflow-hidden cursor-pointer"
        >
          {/* Background fill animation */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-red-900 to-red-800 transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100"></div>
          
          {/* Text */}
          <span className="relative z-10 font-serif text-red-500 uppercase tracking-[0.2em] group-hover:tracking-[0.25em] group-hover:text-white transition-all duration-300 font-bold text-sm md:text-base group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            Узнать больше
          </span>
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-red-700">
        <ChevronDownIcon className="w-8 h-8 opacity-70" />
      </div>
    </section>
  );
};

export default Hero;