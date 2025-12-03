import React from 'react';
import { EventCard } from '../components/UI';
import { EVENTS } from '../services/data';

export const Favorites: React.FC = () => {
  // Mock favorites - just taking the first two
  const favoriteEvents = EVENTS.slice(0, 2);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Mis Eventos</h2>
      
      <div className="space-y-4">
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
          <div className="text-center py-20">
            <p className="text-gray-500">Aún no has guardado eventos.</p>
          </div>
        )}
      </div>
    </div>
  );
};
