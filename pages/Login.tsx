import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components/UI';
import { Mail, Lock, ArrowLeft, Sparkles } from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-screen p-6 flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-party-primary/20 rounded-full blur-[100px] pointer-events-none" />
      
      <button onClick={() => navigate('/')} className="text-white mb-8 w-fit relative z-10 p-2 glass-panel rounded-full hover:bg-white/10 transition-colors">
        <ArrowLeft size={20} />
      </button>

      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="mb-8">
            <h2 className="text-4xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">
              Bienvenido <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-party-primary to-party-cyan">de nuevo</span>
            </h2>
            <p className="text-gray-300 flex items-center gap-2">
               ¿Listo para la próxima salida? <Sparkles size={16} className="text-party-secondary" />
            </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <Input 
            type="email" 
            placeholder="tu@email.com" 
            label="Email" 
            icon={<Mail size={18} />} 
          />
          <Input 
            type="password" 
            placeholder="••••••••" 
            label="Contraseña" 
            icon={<Lock size={18} />} 
          />

          <div className="flex justify-end">
            <button type="button" className="text-sm font-bold text-party-cyan hover:text-white transition-colors hover:shadow-[0_0_10px_rgba(56,189,248,0.5)]">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <Button type="submit" fullWidth className="mt-6 py-4 text-lg shadow-[0_0_30px_rgba(0,163,255,0.3)]">
            Entrar
          </Button>
        </form>

        <div className="mt-10 text-center glass-panel py-4 rounded-2xl">
          <p className="text-gray-400">
            ¿No tienes cuenta?{' '}
            <button onClick={() => navigate('/register')} className="text-white font-bold hover:text-party-primary transition-colors ml-1">
              Crear cuenta
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};