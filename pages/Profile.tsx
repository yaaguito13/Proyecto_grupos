import React, { useState } from 'react';
import { Button, Input, EventCard } from '../components/UI';
import { Instagram, Twitter, Edit2, Settings, Trophy, Zap, Plus, Calendar, MapPin, X, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { EVENTS } from '../services/data';
import { Event } from '../types';

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'activity' | 'myEvents'>('activity');
  
  // State for user events (mocking database)
  const [myEvents, setMyEvents] = useState<Event[]>(EVENTS.filter(e => e.isUserCreated));
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form State
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    category: 'Fiesta'
  });

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    
    const createdEvent: Event = {
      id: Date.now().toString(),
      title: newEvent.title,
      date: `${newEvent.date} • ${newEvent.time}`,
      location: newEvent.location,
      image: `https://picsum.photos/800/600?random=${Date.now()}`,
      category: newEvent.category,
      isFeatured: false,
      attendees: 1, // You are the first attendee
      isUserCreated: true
    };

    setMyEvents([createdEvent, ...myEvents]);
    setShowCreateModal(false);
    setNewEvent({ title: '', date: '', time: '', location: '', category: 'Fiesta' });
  };

  return (
    <div className="pb-6 relative">
      <div className="flex flex-col items-center pt-4">
        {/* Avatar with Glow Ring */}
        <div className="relative mb-6 group cursor-pointer">
          <div className="absolute inset-0 bg-party-gradient rounded-full blur opacity-75 animate-pulse"></div>
          <div className="relative w-32 h-32 rounded-full p-[3px] bg-party-gradient">
            <img 
              src="https://picsum.photos/300/300?random=user" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-4 border-party-bg"
            />
          </div>
          <button className="absolute bottom-1 right-1 p-2.5 bg-party-surface rounded-full border border-white/20 text-white hover:bg-party-primary hover:border-party-primary transition-all shadow-lg">
            <Edit2 size={16} />
          </button>
        </div>
        
        <h2 className="text-3xl font-black text-white mb-1">Alex Johnson</h2>
        <p className="text-party-cyan font-medium text-sm mb-6 bg-party-cyan/10 px-3 py-1 rounded-full border border-party-cyan/20">@alexparty</p>

        {/* Socials */}
        <div className="flex gap-4 mb-8">
          <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-2xl text-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300">
            <Instagram size={22} />
          </a>
          <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-2xl text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300">
            <Twitter size={22} />
          </a>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-4 mb-6 w-full px-2">
          <div className="flex-1 glass-panel p-1.5 rounded-2xl flex relative">
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-party-primary rounded-xl transition-all duration-300 shadow-lg ${activeTab === 'myEvents' ? 'translate-x-[calc(100%+6px)]' : 'translate-x-0'}`}
            />
            <button 
              onClick={() => setActiveTab('activity')}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold z-10 transition-colors flex items-center justify-center gap-2 ${activeTab === 'activity' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Zap size={16} /> Actividad
            </button>
            <button 
               onClick={() => setActiveTab('myEvents')}
               className={`flex-1 py-2.5 rounded-xl text-sm font-bold z-10 transition-colors flex items-center justify-center gap-2 ${activeTab === 'myEvents' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Calendar size={16} /> Mis Eventos
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full px-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {activeTab === 'activity' ? (
            <>
              {/* Stats Glass Box */}
              <div className="glass-panel rounded-3xl p-6 w-full flex justify-between items-center mb-8 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-party-primary to-transparent opacity-50"></div>
                 
                 <div className="flex-1 text-center">
                   <div className="text-2xl font-black text-white mb-1">24</div>
                   <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Eventos</div>
                 </div>
                 <div className="w-px h-8 bg-white/10"></div>
                 <div className="flex-1 text-center">
                   <div className="text-2xl font-black text-white mb-1">142</div>
                   <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Amigos</div>
                 </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full space-y-3 mb-8">
                <Button variant="secondary" fullWidth onClick={() => navigate('/onboarding', { state: { mode: 'edit' } })}>
                  Editar Gustos Musicales
                </Button>
                <Button variant="outline" fullWidth className="border-white/20 text-gray-300 hover:border-white hover:text-white">
                  <Settings size={18} className="mr-2" /> Configuración
                </Button>
              </div>

              {/* Last Activity */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-party-primary rounded-full"></div>
                    Última Fiesta
                </h3>
                <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-party-cyan flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
                   <div>
                       <h4 className="font-bold text-white text-lg">Neon Nights Festival</h4>
                       <p className="text-gray-400 text-sm">Hace 2 días • Club Supernova</p>
                   </div>
                   <div className="h-10 w-10 rounded-full bg-party-cyan/10 flex items-center justify-center text-party-cyan">
                       <Trophy size={20} />
                   </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* My Events Tab */}
              <div className="mb-6">
                 <Button fullWidth onClick={() => setShowCreateModal(true)} className="mb-6 py-4 shadow-[0_0_20px_rgba(0,163,255,0.4)]">
                    <Plus size={20} /> Crear Nuevo Evento
                 </Button>

                 <div className="space-y-4">
                   {myEvents.length > 0 ? (
                     myEvents.map(event => (
                       <EventCard key={event.id} event={event} />
                     ))
                   ) : (
                     <div className="text-center py-12 glass-panel rounded-3xl border-dashed border-2 border-white/10">
                       <Calendar size={48} className="mx-auto text-gray-600 mb-4" />
                       <p className="text-gray-400 font-medium">Aún no has creado eventos.</p>
                       <p className="text-gray-600 text-sm">¡Organiza la próxima fiesta!</p>
                     </div>
                   )}
                 </div>
              </div>
            </>
          )}

        </div>
      </div>

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowCreateModal(false)} />
          
          <div className="relative w-full max-w-lg bg-[#0f172a] rounded-[2rem] border border-white/10 p-6 animate-in slide-in-from-bottom-10 fade-in duration-300 shadow-[0_0_50px_rgba(0,163,255,0.2)]">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-2xl font-black text-white">Nuevo Evento</h3>
               <button onClick={() => setShowCreateModal(false)} className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white">
                 <X size={20} />
               </button>
            </div>

            <form onSubmit={handleCreateEvent} className="space-y-4">
               <Input 
                 label="Nombre del Evento" 
                 placeholder="Ej: Cumpleaños en la Playa" 
                 value={newEvent.title}
                 onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                 required
               />
               
               <div className="grid grid-cols-2 gap-4">
                  <Input 
                    label="Fecha" 
                    type="date"
                    className="mb-0"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    required
                  />
                  <Input 
                    label="Hora" 
                    type="time"
                    className="mb-0"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                    required
                  />
               </div>

               <Input 
                 label="Ubicación" 
                 placeholder="Ej: Orzán, A Coruña" 
                 icon={<MapPin size={18} />}
                 value={newEvent.location}
                 onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                 required
               />

               <div className="flex flex-col gap-1.5 mb-5">
                 <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">Categoría</label>
                 <select 
                    className="w-full bg-black/30 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-party-primary focus:ring-1 focus:ring-party-primary transition-all backdrop-blur-sm appearance-none"
                    value={newEvent.category}
                    onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
                 >
                    <option value="Fiesta">Fiesta</option>
                    <option value="Privado">Privado</option>
                    <option value="Exterior">Exterior</option>
                    <option value="Cena">Cena</option>
                    <option value="Concierto">Concierto</option>
                 </select>
               </div>

               <div className="p-4 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-gray-500 hover:border-party-primary/50 hover:bg-party-primary/5 transition-all cursor-pointer h-32">
                  <ImageIcon size={32} className="mb-2" />
                  <span className="text-xs font-bold">Añadir Imagen de Portada</span>
               </div>

               <Button type="submit" fullWidth className="mt-4">
                 Publicar Evento
               </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
