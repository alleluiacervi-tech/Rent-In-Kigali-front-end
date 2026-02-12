import { Property } from '../types';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { Button } from './ui/button';
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
    <div className="property-card-premium bg-card border border-border/70 rounded-2xl overflow-hidden shadow-sm transition-shadow hover:shadow-md hover-lift">
      <div className="h-64 overflow-hidden bg-muted">
        <ImageWithFallback
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div 
        className="property-card-content p-5 cursor-pointer" 
        onClick={() => onViewDetails(property.id)}
      >
        {/* Location */}
        <div className="property-card-location flex items-center gap-1.5 mb-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="truncate">{property.location}, {property.district}</span>
        </div>

        {/* Title */}
        <h3 className="property-card-title text-lg mb-3 line-clamp-2">
          {property.title}
        </h3>

        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
            {property.type === 'rent' ? 'Monthly rent' : 'Sale price'}
          </p>
          <p className="property-card-price text-xl font-semibold text-foreground">
            {formatPrice(property.price)}
            {property.type === 'rent' && <span className="text-sm font-normal text-muted-foreground">/mo</span>}
          </p>
        </div>

        {/* Specs */}
        {property.category !== 'land' ? (
          <div className="property-card-specs flex flex-wrap items-center gap-x-4 gap-y-2 mb-5 text-sm text-muted-foreground">
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
          <div className="property-card-specs flex items-center gap-1.5 mb-5 text-sm text-muted-foreground">
            <Maximize className="h-4 w-4" />
            <span>{property.area.toLocaleString()} SQM</span>
          </div>
        )}

        <div className="property-card-agent flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-border/60">
          <div className="property-card-agent-info text-sm">
            {property.agent ? (
              <>
                <div className="font-medium truncate">{property.agent.name}</div>
                <div className="text-xs text-muted-foreground">{property.agent.phone}</div>
              </>
            ) : (
              <div className="text-xs text-muted-foreground uppercase tracking-[0.16em]">Verified Listing</div>
            )}
          </div>
          <Button 
            size="sm" 
            className="property-card-view-btn w-full sm:w-auto"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(property.id);
            }}
          >
            View Details
          </Button>
          </div>
      </div>
    </div>
  );
}
