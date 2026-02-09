export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  district: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'rent' | 'sale';
  category: 'house' | 'apartment' | 'villa' | 'studio' | 'land';
  images: string[];
  features: string[];
  status: 'available' | 'rented' | 'sold';
  createdAt: string;
  virtualTourUrl?: string;
  yearBuilt?: number;
  parking?: number;
  furnished?: boolean;
  agent?: {
    name: string;
    phone: string;
    email: string;
    avatar?: string;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'agent' | 'user';
  avatar?: string;
}

export interface DashboardStats {
  totalProperties: number;
  availableProperties: number;
  rentedProperties: number;
  soldProperties: number;
  totalRevenue: number;
  monthlyRevenue: number;
  activeUsers: number;
  newInquiries: number;
}
