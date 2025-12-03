import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/UI';
import { Music, Map, User, Check } from 'lucide-react';

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditing = location.state?.mode === 'edit';
  const [step, setStep] = useState(1);

  const musicGenres = ['Reggaeton', 'Techno', 'Rock', 'Pop', 'Salsa', 'Hip Hop', 'Indie', 'Jazz', 'Infantil'];
  const venueTypes = ['Discoteca', 'Pub', 'Bar', 'Exterior', 'Privado', 'Rooftop', 'Parque', 'Salón de Fiestas'];
  const ages = ['Infantil', '14-17', '18-21', '22-25', '26-30', '30+'];

  const [selectedMusic, setSelectedMusic] = useState<string[]>([]);
  const [selectedVenues, setSelectedVenues] = useState<string[]>([]);
  const [selectedAge, setSelectedAge] = useState<string[]>([]);

  const toggleSelection = (list: string[], item: string, setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList([]);
    } else {
      setList([item]);
    }
  };

  const handleFinish = () => {
    if (isEditing) {
      navigate('/profile');
    } else {
      navigate('/home');
    }
  };

  const isSelectionEmpty = () => {
    if (step === 1) return selectedMusic.length === 0;
    if (step === 2) return selectedVenues.length === 0;
    if (step === 3) return selectedAge.length === 0;
    return false;
  };

  const getButtonText = () => {
    if (step === 3) {
      if (isEditing) return "Guardar";
      return isSelectionEmpty() ? 'Finalizar' : 'Guardar y Continuar';
    }
    return isSelectionEmpty() ? 'Saltar' : 'Siguiente';
  };

  const SelectionGrid = ({ items, selected, toggle }: any) => (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item: string) => {
        const isSelected = selected.includes(item);
        return (
          <button
            key={item}
            onClick={() => toggle(selected, item, toggle)}
            className={`relative overflow-hidden p-4 rounded-2xl border text-sm font-bold transition-all duration-300 group ${
              isSelected 
                ? 'bg-party-primary/20 border-party-primary text-white shadow-[0_0_20px_rgba(0,163,255,0.3)]' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {item}
                {isSelected && <Check size={14} className="text-party-primary" />}
            </span>
            {isSelected && <div className="absolute inset-0 bg-party-primary/10 animate-pulse" />}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-party-bg p-6 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-white/10 h-1.5 rounded-full mb-10 overflow-hidden">
        <div 
          className="bg-party-gradient h-full rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(0,163,255,0.8)]" 
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <h2 className="text-3xl font-black text-white mb-2">
        {isEditing ? 'Editar Preferencias' : 'Tu Estilo'}
      </h2>
      <p className="text-gray-400 mb-8 text-lg">
        {isEditing ? 'Actualiza tus gustos para mejorar tus recomendaciones.' : 'Cuéntanos qué te mueve para personalizar la fiesta.'}
      </p>

      <div className="flex-1">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-party-primary/20 text-party-cyan border border-party-cyan/30">
                 <Music size={24} /> 
              </div>
              <span className="font-bold text-xl text-white">Música Favorita</span>
            </div>
            <SelectionGrid 
              items={musicGenres} 
              selected={selectedMusic} 
              toggle={(sel: any, item: any, fn: any) => toggleSelection(selectedMusic, item, setSelectedMusic)} 
            />
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-party-secondary/20 text-party-secondary border border-party-secondary/30">
                 <Map size={24} /> 
              </div>
              <span className="font-bold text-xl text-white">Ambiente</span>
            </div>
            <SelectionGrid 
              items={venueTypes} 
              selected={selectedVenues} 
              toggle={(sel: any, item: any, fn: any) => toggleSelection(selectedVenues, item, setSelectedVenues)} 
            />
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-party-yellow/20 text-party-yellow border border-party-yellow/30">
                <User size={24} /> 
              </div>
              <span className="font-bold text-xl text-white">Tu Edad</span>
            </div>
            <SelectionGrid 
              items={ages} 
              selected={selectedAge} 
              toggle={(sel: any, item: any, fn: any) => toggleSelection(selectedAge, item, setSelectedAge)}
            />
          </div>
        )}
      </div>

      <div className="mt-8">
        <Button 
          fullWidth 
          onClick={() => step < 3 ? setStep(step + 1) : handleFinish()}
          variant={isSelectionEmpty() ? 'secondary' : 'primary'}
          className="py-4 text-lg"
        >
          {getButtonText()}
        </Button>
      </div>
    </div>
  );
};