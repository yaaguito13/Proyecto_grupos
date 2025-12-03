import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components/UI';
import { Mail, Lock, User, ArrowLeft, Zap } from 'lucide-react';

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen p-6 flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-party-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <button onClick={() => navigate('/')} className="text-white mb-6 w-fit relative z-10 p-2 glass-panel rounded-full hover:bg-white/10 transition-colors">
        <ArrowLeft size={20} />
      </button>

      <div className="flex-1 relative z-10">
        <div className="mb-8">
            <h2 className="text-4xl font-black text-white mb-2 tracking-tighter">
              Únete a la <span className="text-transparent bg-clip-text bg-gradient-to-r from-party-cyan to-party-primary">Movida</span>
            </h2>
            <p className="text-gray-300 flex items-center gap-2">
               Crea tu perfil y empieza a salir. <Zap size={16} className="text-party-secondary" />
            </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <Input 
            type="text" 
            placeholder="Juan Pérez" 
            label="Nombre completo" 
            icon={<User size={18} />} 
          />
          <Input 
            type="email" 
            placeholder="tu@email.com" 
            label="Email" 
            icon={<Mail size={18} />} 
          />
          <div className="grid grid-cols-2 gap-3">
            <Input 
                type="password" 
                placeholder="••••••" 
                label="Contraseña" 
                icon={<Lock size={18} />} 
                className="mb-0"
            />
            <Input 
                type="password" 
                placeholder="••••••" 
                label="Repetir" 
                icon={<Lock size={18} />} 
                className="mb-0"
            />
          </div>

          <Button type="submit" fullWidth className="mt-8 py-4 text-lg shadow-[0_0_30px_rgba(0,163,255,0.3)]">
            Registrarse
          </Button>
        </form>

        <div className="mt-8 text-center glass-panel py-4 rounded-2xl">
          <p className="text-gray-400">
            ¿Ya tienes cuenta?{' '}
            <button onClick={() => navigate('/login')} className="text-white font-bold hover:text-party-primary transition-colors ml-1">
              Iniciar Sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};