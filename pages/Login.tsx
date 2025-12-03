import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components/UI';
import { Mail, Lock, ArrowLeft } from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Login logic
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-party-dark p-6 flex flex-col">
      <button onClick={() => navigate('/')} className="text-white mb-8 w-fit">
        <ArrowLeft />
      </button>

      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-white mb-2">Bienvenido de nuevo</h2>
        <p className="text-gray-400 mb-8">¡Te echábamos de menos en la pista!</p>

        <form onSubmit={handleLogin} className="space-y-4">
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
            <button type="button" className="text-sm text-party-cyan hover:underline">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <Button type="submit" fullWidth className="mt-6">
            Entrar
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            ¿No tienes cuenta?{' '}
            <button onClick={() => navigate('/register')} className="text-party-neon font-bold hover:underline">
              Crear cuenta
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
