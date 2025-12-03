import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI';
import { Music, Map, User } from 'lucide-react';

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const musicGenres = ['Reggaeton', 'Techno', 'Rock', 'Pop', 'Salsa', 'Hip Hop', 'Indie', 'Jazz', 'Infantil'];
  const venueTypes = ['Discoteca', 'Pub', 'Bar', 'Exterior', 'Privado', 'Rooftop', 'Parque', 'Salón de Fiestas'];
  const ages = ['Infantil', '14-17', '18-21', '22-25', '26-30', '30+'];

  const [selectedMusic, setSelectedMusic] = useState<string[]>([]);
  const [selectedVenues, setSelectedVenues] = useState<string[]>([]);
  const [selectedAge, setSelectedAge] = useState<string[]>([]);

  const toggleSelection = (list: string[], item: string, setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleFinish = () => {
    navigate('/home');
  };

  const SelectionGrid = ({ items, selected, toggle, single = false }: any) => (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item: string) => {
        const isSelected = single ? selected === item : selected.includes(item);
        return (
          <button
            key={item}
            onClick={() => single ? toggle(item) : toggle(selected, item, toggle)}
            className={`p-4 rounded-2xl border text-sm font-medium transition-all ${
              isSelected 
                ? 'bg-party-neon border-party-neon text-white shadow-lg shadow-party-neon/30' 
                : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500'
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-party-dark p-6 flex flex-col">
      <div className="w-full bg-gray-800 h-1 rounded-full mb-8">
        <div 
          className="bg-party-cyan h-1 rounded-full transition-all duration-500" 
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <h2 className="text-2xl font-bold text-white mb-2">Personaliza tu experiencia</h2>
      <p className="text-gray-400 mb-8">Para mostrarte las mejores fiestas y eventos.</p>

      <div className="flex-1">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-2 mb-4 text-party-neon">
              <Music size={20} /> <span className="font-semibold">Música Favorita</span>
            </div>
            <SelectionGrid 
              items={musicGenres} 
              selected={selectedMusic} 
              toggle={(sel: any, item: any, fn: any) => toggleSelection(selectedMusic, item, setSelectedMusic)} 
            />
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-2 mb-4 text-pink-500">
              <Map size={20} /> <span className="font-semibold">Tipo de Lugar</span>
            </div>
            <SelectionGrid 
              items={venueTypes} 
              selected={selectedVenues} 
              toggle={(sel: any, item: any, fn: any) => toggleSelection(selectedVenues, item, setSelectedVenues)} 
            />
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-2 mb-4 text-party-cyan">
              <User size={20} /> <span className="font-semibold">Rango de Edad</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Selecciona uno o más rangos.</p>
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
          disabled={
            (step === 1 && selectedMusic.length === 0) ||
            (step === 2 && selectedVenues.length === 0) ||
            (step === 3 && selectedAge.length === 0)
          }
        >
          {step === 3 ? 'Guardar y Continuar' : 'Siguiente'}
        </Button>
      </div>
    </div>
  );
};