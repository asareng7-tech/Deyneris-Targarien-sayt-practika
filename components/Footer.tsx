import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-white font-bold">Targaryen</h3>
          <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider">Fire and Blood</p>
        </div>

        {/* Социальные ссылки удалены */}

        <div className="text-gray-600 text-sm font-sans">
          © 2024 Valyria Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;