import React from 'react';
import { MapPin, Calendar, Heart } from 'lucide-react';
import { Event } from '../types';

// --- Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "py-3 px-6 rounded-full font-semibold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    outline: "border-2 border-party-cyan text-party-cyan hover:bg-party-cyan/10",
    ghost: "bg-transparent text-gray-300 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Input Component ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, icon, className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-1 mb-4 ${className}`}>
      {label && <label className="text-sm text-gray-400 ml-2">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input 
          className={`w-full bg-gray-800/50 border border-gray-700 rounded-2xl py-3 ${icon ? 'pl-12' : 'pl-4'} pr-4 text-white focus:outline-none focus:border-party-neon focus:ring-1 focus:ring-party-neon transition-colors`}
          {...props}
        />
      </div>
    </div>
  );
};

// --- Event Card Component ---
interface EventCardProps {
  event: Event;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, isFavorite, onToggleFavorite }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden bg-gray-900/40 border border-white/5 shadow-xl hover:border-party-neon/50 transition-all duration-300 mb-4">
      {/* Image Overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3 z-20">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.(event.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md ${isFavorite ? 'bg-pink-500/20 text-pink-500' : 'bg-black/30 text-white'} hover:bg-pink-500 hover:text-white transition-colors`}
          >
            <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="absolute top-3 left-3 z-20">
             <span className="px-3 py-1 text-xs font-bold bg-party-neon/80 text-white rounded-full backdrop-blur-sm">
               {event.category}
             </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 relative z-20">
        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{event.title}</h3>
        
        <div className="flex items-center gap-2 text-gray-400 mb-1 text-sm">
          <Calendar size={14} className="text-party-cyan" />
          <span>{event.date}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <MapPin size={14} className="text-pink-500" />
          <span>{event.location}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
           <div className="flex -space-x-2">
              {[1,2,3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border border-gray-900 bg-gray-700 overflow-hidden">
                  <img src={`https://picsum.photos/50/50?random=${event.id}${i}`} alt="user" />
                </div>
              ))}
              <span className="text-xs text-gray-400 pl-3 pt-1">+{event.attendees} van</span>
           </div>
           <button className="text-xs font-semibold text-party-cyan hover:underline">Ver detalles</button>
        </div>
      </div>
    </div>
  );
};
