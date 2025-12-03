import { Event, Friend } from '../types';

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Neon Nights Festival',
    date: 'Vie, 24 Nov • 22:00',
    location: 'Club Supernova',
    image: 'https://picsum.photos/800/600?random=1',
    isFeatured: true,
    category: 'Electrónica',
    attendees: 1240
  },
  {
    id: '2',
    title: 'Retro 80s Party',
    date: 'Sáb, 25 Nov • 23:00',
    location: 'Bar Nostalgia',
    image: 'https://picsum.photos/800/600?random=2',
    isFeatured: true,
    category: 'Retro',
    attendees: 340
  },
  {
    id: '3',
    title: 'Sunset Rooftop Chill',
    date: 'Dom, 26 Nov • 18:00',
    location: 'Skyline Hotel',
    image: 'https://picsum.photos/800/600?random=3',
    isFeatured: false,
    category: 'Chill',
    attendees: 85
  },
  {
    id: '4',
    title: 'Underground Techno',
    date: 'Vie, 24 Nov • 01:00',
    location: 'The Basement',
    image: 'https://picsum.photos/800/600?random=4',
    isFeatured: false,
    category: 'Techno',
    attendees: 450
  },
  {
    id: '5',
    title: 'Salsa & Bachata Night',
    date: 'Jue, 23 Nov • 21:00',
    location: 'Havana Club',
    image: 'https://picsum.photos/800/600?random=5',
    isFeatured: false,
    category: 'Latino',
    attendees: 210
  }
];

export const FRIENDS: Friend[] = [
  { id: '1', name: 'Carla Mendez', avatar: 'https://picsum.photos/200/200?random=10', mutualFriends: 12, isOnline: true },
  { id: '2', name: 'Javier Gomez', avatar: 'https://picsum.photos/200/200?random=11', mutualFriends: 5, isOnline: false },
  { id: '3', name: 'Sofia Ruiz', avatar: 'https://picsum.photos/200/200?random=12', mutualFriends: 23, isOnline: true },
  { id: '4', name: 'Marco Polo', avatar: 'https://picsum.photos/200/200?random=13', mutualFriends: 1, isOnline: false },
];
