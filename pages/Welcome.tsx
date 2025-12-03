import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI';
import { Sparkles } from 'lucide-react';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex flex-col justify-end p-8 overflow-hidden bg-party-bg">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-party-primary rounded-full blur-[150px] opacity-20 animate-pulse" />
         <div className="absolute bottom-[10%] right-[-20%] w-[400px] h-[400px] bg-party-secondary rounded-full blur-[150px] opacity-20" />
         <div className="absolute top-[40%] left-[30%] w-60 h-60 bg-party-cyan rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="relative z-10 flex flex-col items-center mb-10 text-center">
        <div className="w-24 h-24 glass-panel border border-white/20 rounded-[2rem] flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(0,163,255,0.2)] transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <Sparkles size={48} className="text-party-secondary" fill="currentColor" />
        </div>
        
        <h1 className="text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">
          Party<span className="text-transparent bg-clip-text bg-gradient-to-r from-party-primary to-party-cyan">Link</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-xs font-medium leading-relaxed">
          Vive la noche de Coruña. <br/>
          <span className="text-party-secondary">Descubre.</span> Conecta. <span className="text-party-primary">Disfruta.</span>
        </p>

        <div className="w-full space-y-4">
          <Button fullWidth onClick={() => navigate('/login')} className="text-lg py-4">
            Iniciar Sesión
          </Button>
          <Button fullWidth variant="secondary" onClick={() => navigate('/register')} className="text-lg py-4">
            Registrarse
          </Button>
        </div>
      </div>
    </div>
  );
};