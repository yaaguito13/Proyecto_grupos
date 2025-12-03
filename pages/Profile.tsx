import React from 'react';
import { Button } from '../components/UI';
import { Instagram, Twitter, Edit2, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-6">
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4 group cursor-pointer">
          <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-party-neon to-party-cyan">
            <img 
              src="https://picsum.photos/300/300?random=user" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-4 border-party-dark"
            />
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-gray-800 rounded-full border border-gray-700 text-white hover:bg-party-neon transition-colors">
            <Edit2 size={14} />
          </button>
        </div>
        
        <h2 className="text-2xl font-bold text-white">Alex Johnson</h2>
        <p className="text-party-cyan text-sm mb-4">@alexparty</p>

        <div className="flex gap-4 mb-6">
          <a href="#" className="p-2 bg-gray-800 rounded-full text-pink-500 hover:bg-pink-500/10 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full text-blue-400 hover:bg-blue-400/10 transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <div className="flex gap-8 text-center w-full px-8 mb-8">
           <div className="flex-1">
             <div className="text-xl font-bold text-white">24</div>
             <div className="text-xs text-gray-500 uppercase tracking-wide">Eventos</div>
           </div>
           <div className="w-px bg-gray-800"></div>
           <div className="flex-1">
             <div className="text-xl font-bold text-white">142</div>
             <div className="text-xs text-gray-500 uppercase tracking-wide">Amigos</div>
           </div>
           <div className="w-px bg-gray-800"></div>
           <div className="flex-1">
             <div className="text-xl font-bold text-white">8</div>
             <div className="text-xs text-gray-500 uppercase tracking-wide">Listas</div>
           </div>
        </div>

        <div className="w-full space-y-3 px-2">
          <Button variant="secondary" fullWidth onClick={() => navigate('/onboarding')}>
            Editar Gustos Musicales
          </Button>
          <Button variant="outline" fullWidth>
            Configuración de Cuenta
          </Button>
        </div>
      </div>
      
      <div className="px-4">
        <h3 className="text-lg font-bold text-white mb-3">Última Actividad</h3>
        <div className="bg-gray-800/30 rounded-2xl p-4 border border-white/5">
           <p className="text-gray-400 text-sm">Asistió a <span className="text-white font-medium">Neon Nights Festival</span> hace 2 días.</p>
        </div>
      </div>
    </div>
  );
};
