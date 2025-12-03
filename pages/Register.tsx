import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components/UI';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Proceed to preferences
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-party-dark p-6 flex flex-col">
      <button onClick={() => navigate('/')} className="text-white mb-6 w-fit">
        <ArrowLeft />
      </button>

      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white mb-2">Crear Cuenta</h2>
        <p className="text-gray-400 mb-8">Únete a la comunidad de fiesta más grande.</p>

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
          <Input 
            type="password" 
            placeholder="••••••••" 
            label="Contraseña" 
            icon={<Lock size={18} />} 
          />
           <Input 
            type="password" 
            placeholder="••••••••" 
            label="Repetir Contraseña" 
            icon={<Lock size={18} />} 
          />

          <Button type="submit" fullWidth className="mt-8">
            Registrarse
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            ¿Ya tienes cuenta?{' '}
            <button onClick={() => navigate('/login')} className="text-party-neon font-bold hover:underline">
              Iniciar Sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
