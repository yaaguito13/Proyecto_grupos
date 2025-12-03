import React, { useState } from 'react';
import { Input } from '../components/UI';
import { Search, UserPlus, Trash2 } from 'lucide-react';
import { FRIENDS } from '../services/data';

export const Friends: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFriends = FRIENDS.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-8">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-3xl font-black text-white tracking-tight">Tu <span className="text-party-cyan">Crew</span></h2>
        {/* Counter removed as requested */}
      </div>
      
      <div className="mb-8 flex gap-3">
        <div className="flex-1">
          <Input 
            placeholder="Buscar en tu lista..." 
            icon={<Search size={18} />} 
            className="mb-0"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-party-surface border border-party-primary/50 w-14 h-14 rounded-2xl flex items-center justify-center text-party-primary shadow-[0_0_20px_rgba(0,163,255,0.2)] active:scale-95 transition-all hover:bg-party-primary hover:text-white">
          <UserPlus size={24} />
        </button>
      </div>

      <div className="space-y-4">
        {filteredFriends.map(friend => (
          <div key={friend.id} className="glass-panel p-4 rounded-3xl flex items-center gap-4 group hover:border-party-cyan/30 transition-all duration-300">
            {/* Avatar */}
            <div className="relative">
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-party-primary to-party-cyan">
                 <img src={friend.avatar} alt={friend.name} className="w-full h-full rounded-full object-cover border-2 border-black" />
              </div>
              {friend.isOnline && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-party-success rounded-full border-4 border-[#0f172a] shadow-[0_0_10px_#34d399]"></div>
              )}
            </div>
            
            {/* Info */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg leading-tight group-hover:text-party-cyan transition-colors">{friend.name}</h3>
              <p className="text-xs text-gray-400 font-medium mt-0.5 flex items-center gap-1">
                 <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                 {friend.mutualFriends} amigos en común
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
               <button className="p-2.5 rounded-xl bg-white/5 text-gray-300 hover:bg-party-secondary hover:text-black transition-all hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                  <Trash2 size={18} />
               </button>
            </div>
          </div>
        ))}

        {filteredFriends.length === 0 && (
            <div className="text-center py-12">
                <p className="text-gray-500">No se encontraron amigos.</p>
            </div>
        )}
      </div>
    </div>
  );
};
