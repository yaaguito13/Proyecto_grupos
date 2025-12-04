import React, { useState } from 'react';
import { UserPlus, Trash2, AlertTriangle, X } from 'lucide-react';
import { FRIENDS } from '../services/data';
import { useNavigate } from 'react-router-dom';

export const Friends: React.FC = () => {
  const navigate = useNavigate();
  // Using local state to simulate deletion for the UI
  const [friendsList, setFriendsList] = useState(FRIENDS);
  const [friendToDelete, setFriendToDelete] = useState<string | null>(null);

  const confirmDelete = () => {
    if (friendToDelete) {
      setFriendsList(friendsList.filter(f => f.id !== friendToDelete));
      setFriendToDelete(null);
    }
  };

  return (
    <div className="pb-8 relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black text-white tracking-tight">Tu <span className="text-party-cyan">Crew</span></h2>
        
        <button 
          onClick={() => navigate('/add-friend')}
          className="bg-party-surface border border-party-primary/50 w-12 h-12 rounded-2xl flex items-center justify-center text-party-primary shadow-[0_0_20px_rgba(0,163,255,0.2)] active:scale-95 transition-all hover:bg-party-primary hover:text-white"
        >
          <UserPlus size={24} />
        </button>
      </div>

      <div className="space-y-4">
        {friendsList.map(friend => (
          <div key={friend.id} className="glass-panel p-4 rounded-3xl flex items-center gap-4 group hover:border-party-cyan/30 transition-all duration-300">
            {/* Avatar */}
            <div className="relative">
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-party-primary to-party-cyan">
                 <img src={friend.avatar} alt={friend.name} className="w-full h-full rounded-full object-cover border-2 border-black" />
              </div>
            </div>
            
            {/* Info */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg leading-tight group-hover:text-party-cyan transition-colors">{friend.name}</h3>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
               <button 
                 onClick={() => setFriendToDelete(friend.id)}
                 className="p-2.5 rounded-xl bg-white/5 text-gray-300 hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/50 border border-transparent transition-all"
               >
                  <Trash2 size={18} />
               </button>
            </div>
          </div>
        ))}

        {friendsList.length === 0 && (
            <div className="text-center py-12">
                <p className="text-gray-500">No tienes amigos añadidos.</p>
            </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {friendToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setFriendToDelete(null)} />
          <div className="relative bg-[#0f172a] border border-white/10 p-6 rounded-3xl max-w-sm w-full shadow-[0_0_40px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-red-500/10 rounded-full text-red-500">
                 <AlertTriangle size={24} />
               </div>
               <button onClick={() => setFriendToDelete(null)} className="text-gray-400 hover:text-white">
                 <X size={20} />
               </button>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">¿Eliminar amigo?</h3>
            <p className="text-gray-400 mb-6">Esta persona dejará de ver tus eventos privados.</p>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setFriendToDelete(null)}
                className="flex-1 py-3 rounded-xl font-bold text-gray-300 hover:bg-white/5 transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmDelete}
                className="flex-1 py-3 rounded-xl font-bold bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};