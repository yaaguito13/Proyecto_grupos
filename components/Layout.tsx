import React, { useState } from 'react';
import { Home, Heart, Users, User, Menu, X, LogOut, Bell, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
  ];

  return (
    <div className="min-h-screen pb-28 relative overflow-x-hidden bg-party-bg text-white font-sans selection:bg-party-primary/30">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-party-bg/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300 shadow-sm">
        <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-white hover:text-party-primary transition-colors">
          <Menu size={28} />
        </button>
        <div className="flex items-center gap-2">
            <Sparkles className="text-party-secondary w-5 h-5 animate-pulse" />
            <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-party-primary via-blue-400 to-party-cyan tracking-tighter">
            PartyLink
            </h1>
        </div>
        <div className="w-8" /> 
      </header>

      {/* Main Content */}
      <main className="pt-24 px-4 sm:px-6">
        {children}
      </main>

      {/* Sidebar Drawer */}
      <div className={`fixed inset-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSidebarOpen(false)} />
        
        <div className="relative w-4/5 max-w-xs h-full bg-[#020617] border-r border-white/10 flex flex-col p-8 shadow-[0_0_50px_rgba(0,163,255,0.2)]">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white">Menú</h2>
            <button onClick={() => setSidebarOpen(false)} className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3 flex-1">
            {sidebarItems.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  item.action();
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-4 p-4 rounded-2xl text-gray-300 hover:bg-party-gradient hover:text-white transition-all duration-300 group"
              >
                <item.icon size={22} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg">{item.label}</span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-4 p-4 rounded-2xl text-party-primary border border-party-primary/30 hover:bg-party-primary/10 mt-auto transition-colors"
          >
            <LogOut size={20} />
            <span className="font-bold">Cerrar Sesión</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation (Expanding Pill Design) */}
      <nav className="fixed bottom-2 left-5 right-5 z-40">
        <div className="glass-panel rounded-[2.5rem] h-20 px-2.5 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.6)] bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 ring-1 ring-white/5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`
                  relative flex items-center justify-center rounded-[2rem] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden
                  ${isActive 
                    ? 'flex-[2.5] bg-party-primary text-white shadow-[0_0_20px_rgba(0,163,255,0.4)] h-14' 
                    : 'flex-1 text-gray-400 hover:text-white h-14 hover:bg-white/5'
                  }
                `}
              >
                 <div className={`relative z-10 flex items-center justify-center gap-2 ${isActive ? 'px-2' : ''}`}>
                   <item.icon size={26} strokeWidth={isActive ? 2.5 : 2} className="flex-shrink-0" />
                   
                   <div className={`overflow-hidden transition-all duration-500 flex items-center ${isActive ? 'w-auto opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-4'}`}>
                      <span className="text-sm font-bold whitespace-nowrap ml-1.5">{item.label}</span>
                   </div>
                 </div>
                 
                 {/* Active background shine effect */}
                 {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                 )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};