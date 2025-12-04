import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, UserPlus, Check } from 'lucide-react';
import { Input } from '../components/UI';

export const AddFriend: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [addedIds, setAddedIds] = useState<string[]>([]);

  // Mock results for searching new people
  const mockResults = [
    { id: '101', name: 'Laura Martinez', avatar: 'https://picsum.photos/200/200?random=20' },
    { id: '102', name: 'Pablo Diez', avatar: 'https://picsum.photos/200/200?random=21' },
    { id: '103', name: 'Ana Rey', avatar: 'https://picsum.photos/200/200?random=22' },
  ];

  const handleAdd = (id: string) => {
    setAddedIds([...addedIds, id]);
  };

  return (
    <div className="pb-8">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate('/friends')} 
          className="p-3 rounded-full glass-panel hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>
        <h2 className="text-2xl font-black text-white">Añadir Amigo</h2>
      </div>

      <div className="mb-8">
        <Input 
          placeholder="Buscar por nombre de usuario..." 
          icon={<Search size={18} />} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
      </div>

      <div className="space-y-4">
        {searchTerm.length > 0 ? (
          mockResults.map(user => {
            const isAdded = addedIds.includes(user.id);
            return (
              <div key={user.id} className="glass-panel p-4 rounded-3xl flex items-center justify-between group animate-in slide-in-from-bottom-2">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-gray-700 to-gray-600">
                       <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover border-2 border-black" />
                    </div>
                    <span className="font-bold text-white text-lg">{user.name}</span>
                 </div>
                 
                 <button 
                    onClick={() => handleAdd(user.id)}
                    disabled={isAdded}
                    className={`
                      px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all
                      ${isAdded 
                        ? 'bg-party-success/20 text-party-success cursor-default' 
                        : 'bg-party-primary text-white shadow-[0_0_15px_rgba(0,163,255,0.3)] active:scale-95'
                      }
                    `}
                 >
                    {isAdded ? (
                      <><Check size={18} /> Siguiendo</>
                    ) : (
                      <><UserPlus size={18} /> Seguir</>
                    )}
                 </button>
              </div>
            );
          })
        ) : (
           <div className="text-center py-12">
             <div className="w-20 h-20 rounded-full bg-white/5 mx-auto flex items-center justify-center mb-4">
                <Search size={32} className="text-gray-600" />
             </div>
             <p className="text-gray-500 font-medium">Escribe un nombre para buscar personas.</p>
           </div>
        )}
      </div>
    </div>
  );
};