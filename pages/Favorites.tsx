import React from 'react';
import { EventCard } from '../components/UI';
import { EVENTS } from '../services/data';
import { Bookmark, Heart } from 'lucide-react';

export const Favorites: React.FC = () => {
  // Mock favorites - just taking the first two for demo
  const favoriteEvents = EVENTS.slice(0, 2);

  return (
    <div className="pb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-party-primary/20 rounded-2xl text-party-primary border border-party-primary/30">
            <Heart size={24} fill="currentColor" />
        </div>
        <div>
            <h2 className="text-3xl font-black text-white leading-none">Mis <span className="text-party-primary">Favoritos</span></h2>
            <p className="text-gray-400 text-sm mt-1">No te pierdas ninguna fiesta</p>
        </div>
      </div>
      
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {favoriteEvents.length > 0 ? (
          favoriteEvents.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              isFavorite={true}
              onToggleFavorite={() => {}}
            />
          ))
        ) : (
          <div className="text-center py-24 glass-panel rounded-3xl border-dashed border-2 border-white/10">
            <Bookmark size={48} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 font-medium">Aún no has guardado eventos.</p>
            <p className="text-gray-600 text-sm">Explora el inicio para añadir algunos.</p>
          </div>
        )}
      </div>
    </div>
  );
};