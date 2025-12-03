export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  music: string[];
  venueType: string[];
  ageRange: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  isFeatured: boolean;
  category: string;
  attendees: number;
  isUserCreated?: boolean; // New field
}

export interface Friend {
  id: string;
  name: string;
  avatar: string;
  mutualFriends: number;
  isOnline: boolean;
}
