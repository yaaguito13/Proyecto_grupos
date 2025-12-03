import React, { useState } from 'react';
import { Input } from '../components/UI';
import { Search, UserPlus, MoreVertical, Trash2, User } from 'lucide-react';
import { FRIENDS } from '../services/data';

export const Friends: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFriends = FRIENDS.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Amigos</h2>
      
      <div className="mb-6 flex gap-3">
        <div className="flex-1">
          <Input 
            placeholder="Buscar amigos..." 
            icon={<Search size={18} />} 
            className="mb-0"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-gradient-to-r from-party-neon to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20 active:scale-95 transition-transform">
          <UserPlus size={24} />
        </button>
      </div>

      <div className="space-y-3">
        {filteredFriends.map(friend => (
          <div key={friend.id} className="bg-gray-800/40 p-3 rounded-2xl flex items-center gap-3 border border-white/5 hover:bg-gray-800/60 transition-colors">
            <div className="relative">
              <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full object-cover" />
              {friend.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-medium">{friend.name}</h3>
              <p className="text-xs text-gray-400">{friend.mutualFriends} amigos en común</p>
            </div>

            <div className="flex items-center gap-1">
               <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <User size={18} />
               </button>
               <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 size={18} />
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
