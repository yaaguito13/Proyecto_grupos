import React, { useState } from 'react';
import { EventCard } from '../components/UI';
import { EVENTS } from '../services/data';
import { Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'forYou'>('featured');
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fid => fid !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const displayedEvents = activeTab === 'featured' 
    ? EVENTS.filter(e => e.isFeatured) 
    : EVENTS;

  return (
    <div className="pb-4">
      {/* Header Area */}
      <div className="mb-6">
        <h2 className="text-3xl font-black text-white mb-1">
          Hola, <span className="text-party-cyan">Alex</span>
        </h2>
        <p className="text-gray-400">¿Qué plan hay en Coruña hoy?</p>
      </div>

      {/* Modern Tab Switcher */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 glass-panel p-1.5 rounded-2xl flex relative">
          {/* Animated Background Pill */}
          <div 
            className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-party-gradient rounded-xl transition-all duration-300 shadow-lg ${activeTab === 'forYou' ? 'translate-x-[calc(100%+6px)]' : 'translate-x-0'}`}
          />
          
          <button 
            onClick={() => setActiveTab('featured')}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold z-10 transition-colors flex items-center justify-center gap-2 ${activeTab === 'featured' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            <Zap size={16} fill={activeTab === 'featured' ? "currentColor" : "none"} /> Destacados
          </button>
          <button 
             onClick={() => setActiveTab('forYou')}
             className={`flex-1 py-2.5 rounded-xl text-sm font-bold z-10 transition-colors ${activeTab === 'forYou' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Para ti
          </button>
        </div>
      </div>

      {/* Content List */}
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        {displayedEvents.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            isFavorite={favorites.includes(event.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
        
        {displayedEvents.length === 0 && (
          <div className="text-center py-20 glass-panel rounded-3xl">
            <p className="text-gray-500">No hay eventos para mostrar.</p>
          </div>
        )}
      </div>
    </div>
  );
};