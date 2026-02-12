import { Property } from '../types';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PropertyCardPremiumProps {
  property: Property;
  onViewDetails: (id: string) => void;
}

export function PropertyCardPremium({ property, onViewDetails }: PropertyCardPremiumProps) {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(1)}M RWF`;
    }
    return `${price.toLocaleString()} RWF`;
  };

  return (
    <div className="bg-card border border-border/70 rounded-2xl overflow-hidden shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-64 overflow-hidden bg-muted">
        <ImageWithFallback
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-4 left-4 z-10">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-primary text-primary-foreground">
              {property.type === 'rent' ? 'For Rent' : 'For Sale'}
            </Badge>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 z-10">
          <div className="bg-white/90 dark:bg-card px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm">
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-1">
              {property.type === 'rent' ? 'Monthly rent' : 'Sale price'}
            </div>
            <div className="text-xl font-semibold text-foreground">
              {formatPrice(property.price)}
              {property.type === 'rent' && <span className="text-sm font-normal text-muted-foreground">/mo</span>}
            </div>
          </div>
        </div>
      </div>

      <div 
        className="p-5 cursor-pointer" 
        onClick={() => onViewDetails(property.id)}
      >
        {/* Location */}
        <div className="flex items-center gap-1.5 mb-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="truncate">{property.location}, {property.district}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-3 line-clamp-2">
          {property.title}
        </h3>

        {/* Specs */}
        {property.category !== 'land' ? (
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize className="h-4 w-4" />
              <span>{property.area} SQM</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 mb-4 text-sm text-muted-foreground">
            <Maximize className="h-4 w-4" />
            <span>{property.area.toLocaleString()} SQM</span>
          </div>
        )}

        {property.agent && (
          <div className="flex items-center justify-between pt-4 border-t border-border/60">
            <div className="text-sm">
              <div className="font-medium">{property.agent.name}</div>
              <div className="text-xs text-muted-foreground">{property.agent.phone}</div>
            </div>
            <Button 
              size="sm" 
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(property.id);
              }}
            >
              View Details
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
