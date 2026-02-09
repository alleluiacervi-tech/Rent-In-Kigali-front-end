import { Property, DashboardStats } from '../types';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern 3 Bedroom Apartment in Kigali Heights',
    description: 'Spacious and modern 3-bedroom apartment with stunning city views. Features include a fully equipped kitchen, modern bathrooms, and a balcony with panoramic views of Kigali. Located in a secure compound with 24/7 security, parking, and backup generator.',
    price: 800000,
    location: 'Kigali Heights, Nyarutarama',
    district: 'Gasabo',
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    type: 'rent',
    category: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE1MTcxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTU3NTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc2MTU3NTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNTA2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1696987007764-7f8b85dd3033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbXxlbnwxfHx8fDE3NjE0NjQ0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1760119746975-14f419948d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwY2l0eSUyMHZpZXd8ZW58MXx8fHwxNzYxNTYzODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Parking', 'Security', 'Generator', 'Balcony', 'Modern Kitchen', 'City Views'],
    status: 'available',
    createdAt: '2025-10-01',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 782 359 111',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '2',
    title: 'Luxury 4 Bedroom Villa in Gacuriro',
    description: 'Exclusive luxury villa in prime Gacuriro location. Features include 4 spacious bedrooms, modern kitchen with island, landscaped garden, swimming pool, and servant quarters. Perfect for executives and diplomats.',
    price: 2500000,
    location: 'Gacuriro Estate',
    district: 'Gasabo',
    bedrooms: 4,
    bathrooms: 4,
    area: 350,
    type: 'rent',
    category: 'villa',
    images: [
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTU4MTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1694967832949-09984640b143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjB2aWxsYXxlbnwxfHx8fDE3NjE1ODE3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTU3NTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc2MTU3NTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNTA2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1696987007764-7f8b85dd3033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbXxlbnwxfHx8fDE3NjE0NjQ0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Swimming Pool', 'Garden', 'Servant Quarters', 'Parking', 'Security', 'Generator', 'Modern Kitchen'],
    status: 'available',
    createdAt: '2025-09-28',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 782 359 111',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '3',
    title: 'Affordable 2 Bedroom House in Kimironko',
    description: 'Cozy 2-bedroom house in a quiet neighborhood of Kimironko. Perfect for small families or young professionals. Features include a small garden, secure compound, and easy access to public transport.',
    price: 400000,
    location: 'Kimironko',
    district: 'Gasabo',
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    type: 'rent',
    category: 'house',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTU1OTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTU3NTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc2MTU3NTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNTA2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Garden', 'Security', 'Parking'],
    status: 'available',
    createdAt: '2025-10-10',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 785 514 692',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '4',
    title: 'Studio Apartment in City Center',
    description: 'Modern studio apartment in the heart of Kigali. Perfect for young professionals. Walking distance to restaurants, shops, and entertainment. Fully furnished with modern amenities.',
    price: 350000,
    location: 'City Center, KN 3 Ave',
    district: 'Nyarugenge',
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    type: 'rent',
    category: 'studio',
    images: [
      'https://images.unsplash.com/photo-1702014861449-202805baa272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE1MzQxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTU3NTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNTA2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1696987007764-7f8b85dd3033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbXxlbnwxfHx8fDE3NjE0NjQ0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Furnished', 'City Center', 'Security', 'WiFi', 'Modern Kitchen'],
    status: 'rented',
    createdAt: '2025-09-15',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 785 514 692',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '5',
    title: 'Commercial Land for Sale - Kicukiro',
    description: 'Prime commercial land in Kicukiro, perfect for development. Located on a main road with high traffic. Suitable for shopping centers, office buildings, or mixed-use development. Clean title deed available.',
    price: 150000000,
    location: 'Kicukiro Center',
    district: 'Kicukiro',
    bedrooms: 0,
    bathrooms: 0,
    area: 1200,
    type: 'sale',
    category: 'land',
    images: [
      'https://images.unsplash.com/photo-1685266325930-ffe4937f6eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhbnQlMjBsYW5kJTIwcGxvdHxlbnwxfHx8fDE3NjE1NjA5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE1MTcxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTU1OTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Main Road', 'Commercial Zone', 'Clean Title', 'High Traffic Area'],
    status: 'available',
    createdAt: '2025-10-05',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 782 359 111',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '6',
    title: 'Penthouse Apartment in Kacyiru',
    description: 'Luxurious penthouse with breathtaking views of Kigali. Features include 3 bedrooms, 3 bathrooms, modern kitchen with premium appliances, spacious living area, and large terrace. Located in a prestigious building with gym and swimming pool.',
    price: 1800000,
    location: 'Kacyiru, near CBD',
    district: 'Gasabo',
    bedrooms: 3,
    bathrooms: 3,
    area: 220,
    type: 'rent',
    category: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1707484687082-9493754d389f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBhcGFydG1lbnR8ZW58MXx8fHwxNzYxNTMwNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTU3NTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc2MTU3NTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNTA2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1760119746975-14f419948d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwY2l0eSUyMHZpZXd8ZW58MXx8fHwxNzYxNTYzODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Terrace', 'City Views', 'Gym Access', 'Pool Access', 'Parking', 'Security', 'Generator', 'Premium Appliances'],
    status: 'available',
    createdAt: '2025-10-12',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 785 514 692',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '7',
    title: 'Family House for Sale in Remera',
    description: 'Beautiful family home in quiet Remera neighborhood. 4 bedrooms, 3 bathrooms, spacious living and dining areas, modern kitchen, garden, and parking for 2 cars. Close to international schools and shopping centers.',
    price: 85000000,
    location: 'Remera',
    district: 'Gasabo',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    type: 'sale',
    category: 'house',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTU1OTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTU3NTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc2MTU3NTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNTA2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1696987007764-7f8b85dd3033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbXxlbnwxfHx8fDE3NjE0NjQ0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Garden', 'Parking', 'Modern Kitchen', 'Near Schools', 'Quiet Neighborhood', 'Security'],
    status: 'available',
    createdAt: '2025-10-08',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 782 359 111',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '8',
    title: '1 Bedroom Apartment in Kibagabaga',
    description: 'Compact and affordable 1-bedroom apartment in Kibagabaga. Perfect for students or young professionals. Close to restaurants, shops, and public transport. Secure compound with water and electricity backup.',
    price: 250000,
    location: 'Kibagabaga',
    district: 'Gasabo',
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    type: 'rent',
    category: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE1MTcxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTU3NTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc2MTU3NTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1696987007764-7f8b85dd3033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbXxlbnwxfHx8fDE3NjE0NjQ0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Security', 'Water Backup', 'Generator', 'Public Transport'],
    status: 'available',
    createdAt: '2025-10-18',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 785 514 692',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '9',
    title: 'Residential Land - Nyarutarama Estate',
    description: 'Prime residential land in exclusive Nyarutarama neighborhood. Perfect for building a luxury family home. Located in a gated community with excellent infrastructure including paved roads, street lighting, and underground utilities. Close to international schools, shopping centers, and embassies.',
    price: 95000000,
    location: 'Nyarutarama Estate',
    district: 'Gasabo',
    bedrooms: 0,
    bathrooms: 0,
    area: 800,
    type: 'sale',
    category: 'land',
    images: [
      'https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGxhbmQlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NzA2MjA2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTU4MTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTU1OTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Gated Community', 'Clean Title', 'Paved Roads', 'Underground Utilities', 'Street Lighting', 'Near Schools'],
    status: 'available',
    createdAt: '2025-11-15',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 782 359 111',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '10',
    title: 'Commercial Land - Nyabugogo Road',
    description: 'Strategic commercial land along busy Nyabugogo main road. Exceptional visibility and high foot traffic. Ideal for shopping centers, retail stores, office buildings, or mixed-use development. Water, electricity, and fiber optic connections available at the site.',
    price: 180000000,
    location: 'Nyabugogo, Main Road',
    district: 'Nyarugenge',
    bedrooms: 0,
    bathrooms: 0,
    area: 1500,
    type: 'sale',
    category: 'land',
    images: [
      'https://images.unsplash.com/photo-1669003153895-1dc8ff33eb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZCUyMHNhbGV8ZW58MXx8fHwxNzcwNjMyOTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE1MTcxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTU1OTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Main Road', 'High Traffic', 'Commercial Zone', 'Clean Title', 'Utilities Available', 'Fiber Optic Ready'],
    status: 'available',
    createdAt: '2025-11-20',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 785 514 692',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '11',
    title: 'Mixed-Use Development Land - Gikondo',
    description: 'Large plot suitable for mixed-use development in rapidly growing Gikondo industrial zone. Perfect for apartment complexes, commercial buildings, or industrial facilities. Easy access to major highways and close to Kigali International Airport.',
    price: 220000000,
    location: 'Gikondo Industrial Zone',
    district: 'Kicukiro',
    bedrooms: 0,
    bathrooms: 0,
    area: 2500,
    type: 'sale',
    category: 'land',
    images: [
      'https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwZGV2ZWxvcG1lbnQlMjBzaXRlfGVufDF8fHx8MTc3MDYzMjkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE1MTcxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTU4MTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Industrial Zone', 'Large Plot', 'Highway Access', 'Near Airport', 'Clean Title', 'Development Ready'],
    status: 'available',
    createdAt: '2025-11-18',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 782 359 111',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '12',
    title: 'Residential Land Plot - Kicukiro Center',
    description: 'Affordable residential land in the heart of Kicukiro. Perfect for building a family home or small apartment complex. Located in a developing neighborhood with easy access to schools, hospitals, and shopping areas. Clean title deed and all necessary documentation available.',
    price: 45000000,
    location: 'Kicukiro Center',
    district: 'Kicukiro',
    bedrooms: 0,
    bathrooms: 0,
    area: 450,
    type: 'sale',
    category: 'land',
    images: [
      'https://images.unsplash.com/photo-1685266325930-ffe4937f6eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhbnQlMjBsYW5kJTIwcGxvdHxlbnwxfHx8fDE3NjE1NjA5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTU1OTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGxhbmQlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NzA2MjA2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Clean Title', 'Residential Zone', 'Near Schools', 'Public Transport', 'Utilities Available'],
    status: 'available',
    createdAt: '2025-11-22',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 785 514 692',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '13',
    title: 'Premium Land - Gacuriro Hills',
    description: 'Exclusive hillside land with panoramic views of Kigali city. Located in prestigious Gacuriro neighborhood, surrounded by luxury villas and diplomatic residences. Perfect for building a high-end villa or executive residence. The plot features gentle slope with excellent drainage.',
    price: 125000000,
    location: 'Gacuriro Hills',
    district: 'Gasabo',
    bedrooms: 0,
    bathrooms: 0,
    area: 1000,
    type: 'sale',
    category: 'land',
    images: [
      'https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGxhbmQlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NzA2MjA2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTU4MTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1760119746975-14f419948d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwY2l0eSUyMHZpZXd8ZW58MXx8fHwxNzYxNTYzODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['City Views', 'Premium Location', 'Clean Title', 'Paved Road Access', 'Gated Community', 'Near Embassies'],
    status: 'available',
    createdAt: '2025-11-25',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 782 359 111',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  },
  {
    id: '14',
    title: 'Agricultural Land - Bugesera District',
    description: 'Fertile agricultural land suitable for farming, horticulture, or agro-tourism projects. Water source available on the property. Access via all-weather road. Perfect for investors looking for agricultural development opportunities. Can be subdivided into smaller plots.',
    price: 35000000,
    location: 'Bugesera, Near Airport',
    district: 'Kicukiro',
    bedrooms: 0,
    bathrooms: 0,
    area: 3000,
    type: 'sale',
    category: 'land',
    images: [
      'https://images.unsplash.com/photo-1702373749921-3ed85367c2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtbGFuZHxlbnwxfHx8fDE3NzA1NDg4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1685266325930-ffe4937f6eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhbnQlMjBsYW5kJTIwcGxvdHxlbnwxfHx8fDE3NjE1NjA5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwZGV2ZWxvcG1lbnQlMjBzaXRlfGVufDF8fHx8MTc3MDYzMjkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    features: ['Large Plot', 'Water Source', 'Fertile Soil', 'All-Weather Road', 'Clean Title', 'Subdividable'],
    status: 'available',
    createdAt: '2025-11-28',
    agent: {
      name: 'RENT IN KIGALI',
      phone: '+250 785 514 692',
      email: 'info@rentinkigali.com',
      avatar: ''
    }
  }
];

export const dashboardStats: DashboardStats = {
  totalProperties: 48,
  availableProperties: 32,
  rentedProperties: 12,
  soldProperties: 4,
  totalRevenue: 45000000,
  monthlyRevenue: 8500000,
  activeUsers: 156,
  newInquiries: 23
};