import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI';
import { Sparkles } from 'lucide-react';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex flex-col justify-end p-6 overflow-hidden">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 bg-party-dark z-0">
         <div className="absolute top-[-20%] left-[-20%] w-96 h-96 bg-party-purple rounded-full blur-[100px] opacity-60 animate-pulse" />
         <div className="absolute bottom-[20%] right-[-10%] w-80 h-80 bg-party-neon rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col items-center mb-12 text-center">
        <div className="w-20 h-20 bg-gradient-to-tr from-party-neon to-party-cyan rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-party-neon/40 transform rotate-12">
            <Sparkles size={40} className="text-white" />
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">PartyLink</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-xs">
          Tu vida nocturna, elevada. Descubre, conecta y vive la fiesta.
        </p>

        <div className="w-full space-y-4">
          <Button fullWidth onClick={() => navigate('/login')}>
            Iniciar Sesión
          </Button>
          <Button fullWidth variant="secondary" onClick={() => navigate('/register')}>
            Registrarse
          </Button>
        </div>
      </div>
    </div>
  );
};
