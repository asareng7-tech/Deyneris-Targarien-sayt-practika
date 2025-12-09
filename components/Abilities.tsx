import React, { useState } from 'react';
import { ABILITIES } from '../constants';
import { CloseIcon } from './Icons';
import { Ability } from '../types';

const Abilities: React.FC = () => {
  const [selectedAbility, setSelectedAbility] = useState<Ability | null>(null);

  return (
    <section id="abilities" className="py-24 bg-neutral-950 text-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase mb-4">
            Кровь Дракона
          </h2>
          <p className="text-red-500 font-sans tracking-widest text-sm uppercase max-w-2xl mx-auto">
            Истинная сила Таргариенов лежит не в золоте, а в наследии древней Валирии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABILITIES.map((ability, index) => (
            <button 
              key={index} 
              onClick={() => setSelectedAbility(ability)}
              className="group relative h-[450px] w-full overflow-hidden border border-gray-800 bg-neutral-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-900"
            >
              {/* Background Image */}
              <img 
                src={ability.imageUrl} 
                alt={ability.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent group-hover:via-black/40 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-0.5 w-12 bg-red-600 mb-4 group-hover:w-full transition-all duration-500"></div>
                  <h3 className="text-2xl font-serif text-white mb-2 leading-tight">
                    {ability.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4 group-hover:text-gray-200 transition-colors opacity-0 group-hover:opacity-100 duration-500 delay-100">
                    {ability.description}
                  </p>
                  <span className="inline-block text-red-500 text-xs uppercase tracking-widest font-bold border-b border-transparent group-hover:border-red-500 transition-all">
                    Подробнее
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Ability Modal */}
      {selectedAbility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedAbility(null)}
          ></div>
          
          <div className="relative bg-neutral-900 border border-red-900/50 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-red-900/20 animate-fade-in-up flex flex-col md:flex-row">
            
            <button 
              onClick={() => setSelectedAbility(null)}
              className="absolute top-4 right-4 text-white z-20 bg-black/50 p-2 rounded-full hover:bg-red-900 transition-colors"
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative">
              <img 
                src={selectedAbility.imageUrl} 
                alt={selectedAbility.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-7/12 p-8 md:p-12 bg-neutral-900 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">{selectedAbility.title}</h3>
              <p className="text-red-500 font-serif italic mb-8 border-l-2 border-red-800 pl-4">
                {selectedAbility.description}
              </p>
              
              <div className="prose prose-invert prose-p:text-gray-300 font-sans leading-loose max-w-none">
                <p>{selectedAbility.fullText}</p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800 text-right">
                <button 
                  onClick={() => setSelectedAbility(null)}
                  className="px-6 py-2 border border-red-900 text-red-500 hover:bg-red-900 hover:text-white transition-all duration-300 font-serif uppercase text-sm tracking-wider"
                >
                  Закрыть
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Abilities;