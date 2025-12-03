import React, { useState } from 'react';
import { EventCard } from '../components/UI';
import { EVENTS } from '../services/data';
import { Filter } from 'lucide-react';

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
    : EVENTS; // Mock logic: "For You" shows all for demo

  return (
    <div className="pb-4">
      {/* Top Tabs */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 bg-gray-800/50 p-1 rounded-xl flex">
          <button 
            onClick={() => setActiveTab('featured')}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'featured' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
          >
            Destacados
          </button>
          <button 
             onClick={() => setActiveTab('forYou')}
             className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'forYou' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
          >
            Gustos
          </button>
        </div>
        <button className="p-3 bg-gray-800/50 rounded-xl text-white hover:bg-gray-700 transition-colors">
          <Filter size={20} />
        </button>
      </div>

      {/* Content List */}
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {displayedEvents.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            isFavorite={favorites.includes(event.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
        
        {/* Empty State Fallback */}
        {displayedEvents.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No hay eventos para mostrar.</p>
          </div>
        )}
      </div>
    </div>
  );
};
