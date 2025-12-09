import React, { useState } from 'react';
import { GALLERY_EVENTS } from '../constants';
import { GalleryEvent } from '../types';
import { CloseIcon } from './Icons';

const Gallery: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);

  return (
    <section id="gallery" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase mb-4">
            Путь к Трону
          </h2>
          <p className="text-red-500 font-sans tracking-widest text-sm uppercase">
            История написанная огнем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_EVENTS.map((event) => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="group relative h-96 w-full overflow-hidden border border-gray-800 focus:outline-none focus:ring-2 focus:ring-red-700"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-serif text-xl font-bold mb-2 border-l-2 border-red-600 pl-3">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Подробнее &rarr;
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          ></div>
          
          <div className="relative bg-neutral-900 border border-red-900/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-red-900/20 animate-fade-in-up">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2 bg-black/50 rounded-full"
            >
              <CloseIcon />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto relative">
                 <img 
                  src={selectedEvent.imageUrl} 
                  alt={selectedEvent.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent md:bg-gradient-to-r"></div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-serif text-white mb-2">{selectedEvent.title}</h3>
                <p className="text-red-500 italic font-serif mb-6">"{selectedEvent.description}"</p>
                <div className="w-16 h-[1px] bg-red-800 mb-6"></div>
                <p className="text-gray-300 leading-relaxed font-sans">
                  {selectedEvent.fullText}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;