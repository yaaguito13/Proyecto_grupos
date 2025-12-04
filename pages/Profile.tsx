
import React from 'react';
import { Instagram, Twitter, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="pb-6 relative">
      <div className="flex flex-col items-center pt-4">
        {/* Avatar with Glow Ring */}
        <div className="relative mb-6 group cursor-pointer">
          <div className="absolute inset-0 bg-party-gradient rounded-full blur opacity-75 animate-pulse"></div>
          <div className="relative w-32 h-32 rounded-full p-[3px] bg-party-gradient">
            <img 
              src="https://picsum.photos/300/300?random=user" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-4 border-party-bg"
            />
          </div>
          <button 
            onClick={() => navigate('/onboarding', { state: { mode: 'edit' } })}
            className="absolute bottom-1 right-1 p-2.5 bg-party-surface rounded-full border border-white/20 text-white hover:bg-party-primary hover:border-party-primary transition-all shadow-lg"
          >
            <Edit2 size={16} />
          </button>
        </div>
        
        <h2 className="text-3xl font-black text-white mb-1">Alex Johnson</h2>
        <p className="text-party-cyan font-medium text-sm mb-6 bg-party-cyan/10 px-3 py-1 rounded-full border border-party-cyan/20">@alexparty</p>

        {/* Socials */}
        <div className="flex gap-4 mb-8">
          <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-2xl text-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300">
            <Instagram size={22} />
          </a>
          <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-2xl text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300">
            <Twitter size={22} />
          </a>
        </div>

        {/* Stats Block (Restored) */}
        <div className="flex justify-center gap-4 w-full px-4 mb-8">
          <div className="flex-1 glass-panel p-4 rounded-3xl flex flex-col items-center hover:border-party-primary/30 transition-colors">
             <span className="text-2xl font-black text-white">12</span>
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Eventos</span>
          </div>
          <div className="flex-1 glass-panel p-4 rounded-3xl flex flex-col items-center hover:border-party-primary/30 transition-colors">
             <span className="text-2xl font-black text-white">245</span>
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Amigos</span>
          </div>
        </div>
      </div>
    </div>
  );
};
