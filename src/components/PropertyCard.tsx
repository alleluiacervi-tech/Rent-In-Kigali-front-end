import { Property } from '../types';
import { Bed, Bath, Maximize, MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (id: string) => void;
}

export function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate images when hovering
  useEffect(() => {
    if (isHovering && property.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
      }, 2000); // Change every 2 seconds when hovering

      return () => clearInterval(interval);
    }
  }, [isHovering, property.images.length]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0
    }).format(price);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-56 overflow-hidden" onClick={() => onViewDetails(property.id)}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            {/* Image Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {property.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-primary text-primary-foreground">
            {property.type === 'rent' ? 'For Rent' : 'For Sale'}
          </Badge>
          <Badge 
            variant="secondary"
            className={
              property.status === 'available' 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-gray-500 text-white'
            }
          >
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </Badge>
        </div>

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="line-clamp-2 mb-2">{property.title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{property.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
          {property.category !== 'land' && (
            <>
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.bathrooms}</span>
              </div>
            </>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{property.area} m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              {property.type === 'rent' ? 'Monthly Rent' : 'Price'}
            </p>
            <p className="text-primary">{formatPrice(property.price)}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onViewDetails(property.id)}
          className="w-full"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}