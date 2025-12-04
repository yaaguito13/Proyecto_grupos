import React from 'react';
import { MapPin, Calendar, Heart, ArrowRight } from 'lucide-react';
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
  const baseStyles = "py-3.5 px-6 rounded-2xl font-bold tracking-wide transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    // Gradient vibrant background with shadow glow (Blue Ocean)
    primary: "bg-party-gradient text-white shadow-[0_0_20px_rgba(0,163,255,0.4)] hover:shadow-[0_0_30px_rgba(0,163,255,0.6)] hover:brightness-110 border border-white/10",
    
    // Glassy secondary (Gold hint)
    secondary: "glass-panel text-white hover:bg-party-secondary/20 hover:border-party-secondary/50",
    
    // Neon outline
    outline: "border-2 border-party-cyan text-party-cyan hover:bg-party-cyan hover:text-black shadow-[0_0_10px_rgba(56,189,248,0.2)]",
    
    ghost: "bg-transparent text-gray-400 hover:text-white"
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
    <div className={`flex flex-col gap-1.5 mb-5 ${className}`}>
      {label && <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">{label}</label>}
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-party-primary transition-colors">
            {icon}
          </div>
        )}
        <input 
          className={`w-full bg-black/30 border border-white/10 rounded-2xl py-4 ${icon ? 'pl-12' : 'pl-4'} pr-4 text-white focus:outline-none focus:border-party-primary focus:ring-1 focus:ring-party-primary transition-all placeholder-gray-600 backdrop-blur-sm`}
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
    <div className="relative group rounded-3xl overflow-hidden glass-panel hover:border-party-primary/50 transition-all duration-500 mb-6">
      
      {/* Image Container with Diagonal Clip */}
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-party-bg via-transparent to-transparent z-10 opacity-90" />
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-20">
           <div className="px-3 py-1.5 text-xs font-bold bg-black/60 backdrop-blur-md border border-white/10 text-party-cyan rounded-full uppercase tracking-wider">
             {event.category}
           </div>
        </div>

        {/* Favorite Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite?.(event.id);
          }}
          className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-lg border border-white/10 transition-all duration-300 ${isFavorite ? 'bg-party-primary text-white shadow-[0_0_15px_rgba(0,163,255,0.5)]' : 'bg-black/40 text-white hover:bg-white/20'}`}
        >
          <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 relative z-20 -mt-12">
        <div className="flex justify-between items-end mb-2">
            <h3 className="text-2xl font-black text-white leading-none group-hover:text-party-primary transition-colors neon-text drop-shadow-md">
                {event.title}
            </h3>
        </div>
        
        <div className="flex items-center gap-4 text-gray-300 mb-2 text-sm font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-party-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-party-secondary" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};