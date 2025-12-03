import React, { useState } from 'react';
import { Home, Heart, Users, User, Menu, X, LogOut, Settings, Bell, Shield } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Hide layout on auth pages
  const hideLayout = ['/', '/login', '/register', '/onboarding'].includes(location.pathname);

  if (hideLayout) return <>{children}</>;

  const navItems = [
    { path: '/home', icon: Home, label: 'Inicio' },
    { path: '/favorites', icon: Heart, label: 'Favoritos' },
    { path: '/friends', icon: Users, label: 'Amigos' },
    { path: '/profile', icon: User, label: 'Perfil' },
  ];

  const sidebarItems = [
    { icon: User, label: 'Editar Perfil', action: () => navigate('/profile') },
    { icon: Heart, label: 'Editar Gustos', action: () => navigate('/onboarding', { state: { mode: 'edit' } }) },
    { icon: Bell, label: 'Notificaciones', action: () => {} },
    { icon: Shield, label: 'Privacidad', action: () => {} },
  ];

  return (
    <div className="min-h-screen bg-party-dark pb-20 relative overflow-x-hidden">
      
      {/* Header Mobile */}
      <header className="fixed top-0 w-full z-40 bg-party-dark/80 backdrop-blur-md border-b border-white/5 px-4 py-3 flex justify-between items-center">
        <button onClick={() => setSidebarOpen(true)} className="p-2 text-white">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-party-cyan to-party-neon">
          PartyLink
        </h1>
        <div className="w-8" /> {/* Spacer for balance */}
      </header>

      {/* Main Content */}
      <main className="pt-20 px-4">
        {children}
      </main>

      {/* Sidebar Drawer */}
      <div className={`fixed inset-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        
        <div className="relative w-3/4 max-w-xs h-full bg-gray-900 border-r border-white/10 flex flex-col p-6 shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Ajustes</h2>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="space-y-2 flex-1">
            {sidebarItems.map((item, idx) => (
              <button 
                key={idx}
                onClick={item.action}
                className="w-full flex items-center gap-4 p-4 rounded-xl text-gray-300 hover:bg-white/5 hover:text-party-cyan transition-colors"
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-4 p-4 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 mt-auto transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-gray-900/90 backdrop-blur-lg border-t border-white/5 z-40 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-party-neon' : 'text-gray-500'}`}
              >
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};