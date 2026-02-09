import { useState, useEffect } from 'react';
import { Property } from '../types';
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';

interface FeaturedCarouselProps {
  properties: Property[];
  onViewDetails: (id: string) => void;
}

export function FeaturedCarousel({ properties, onViewDetails }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, [properties.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (properties.length === 0) return null;

  const currentProperty = properties[currentIndex];

  return (
    <div className="featured-carousel relative h-[400px] md:h-[450px] overflow-hidden rounded-xl group shadow-lg">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={currentProperty.images[0]}
            alt={currentProperty.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="featured-carousel-nav absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="featured-carousel-nav absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Property Info */}
      <div className="featured-carousel-content absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 mb-3">
            <Badge className="bg-primary text-primary-foreground text-xs">
              {currentProperty.type === 'rent' ? 'For Rent' : 'For Sale'}
            </Badge>
            <Badge className="bg-green-500 text-white text-xs">
              {currentProperty.status.charAt(0).toUpperCase() + currentProperty.status.slice(1)}
            </Badge>
          </div>

          <h3 className="text-white mb-2 drop-shadow-lg line-clamp-1">{currentProperty.title}</h3>
          
          <div className="flex items-center gap-2 text-white/90 mb-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm md:text-base">{currentProperty.location}</span>
          </div>

          <div className="featured-carousel-specs flex items-center gap-4 md:gap-6 mb-4 text-white text-sm md:text-base">
            {currentProperty.category !== 'land' && (
              <>
                <div className="flex items-center gap-1.5">
                  <Bed className="h-4 w-4" />
                  <span>{currentProperty.bedrooms} Beds</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bath className="h-4 w-4" />
                  <span>{currentProperty.bathrooms} Baths</span>
                </div>
              </>
            )}
            <div className="flex items-center gap-1.5">
              <Maximize className="h-4 w-4" />
              <span>{currentProperty.area} m²</span>
            </div>
          </div>

          <div className="featured-carousel-cta-row flex items-center gap-4 flex-wrap">
            <div className="featured-carousel-price">
              <p className="text-white/80 text-xs mb-0.5">
                {currentProperty.type === 'rent' ? 'Monthly Rent' : 'Price'}
              </p>
              <p className="text-white text-xl md:text-2xl">{formatPrice(currentProperty.price)}</p>
            </div>
            <Button 
              size="default"
              onClick={() => onViewDetails(currentProperty.id)}
              className="featured-carousel-view-btn"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="featured-carousel-dots absolute bottom-6 md:bottom-8 right-6 md:right-8 flex gap-1.5 z-10">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-6 md:w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to property ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
