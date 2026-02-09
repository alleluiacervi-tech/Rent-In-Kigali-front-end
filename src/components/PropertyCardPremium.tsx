import { Property } from '../types';
import { MapPin, Bed, Bath, Maximize, Heart, Share2, BadgeCheck, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface PropertyCardPremiumProps {
  property: Property;
  onViewDetails: (id: string) => void;
}

export function PropertyCardPremium({ property, onViewDetails }: PropertyCardPremiumProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(1)}M RWF`;
    }
    return `${price.toLocaleString()} RWF`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-accent text-accent-foreground';
      case 'rented':
        return 'bg-orange-500 text-white';
      case 'sold':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const isFeatured = property.status === 'available' && property.price > 1000000;

  return (
    <div className="group relative bg-card border border-border/70 rounded-3xl overflow-hidden hover-lift animate-fade-in card-outline">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden image-zoom bg-muted">
        <ImageWithFallback
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-60 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 z-10">
          <div className="flex flex-wrap gap-2">
            <Badge className={`${getStatusColor(property.status)} badge-glow`}>
              {property.status === 'available' ? 'Available' : property.status === 'rented' ? 'Rented' : 'Sold'}
            </Badge>
            {isFeatured && (
              <Badge className="bg-primary text-primary-foreground gap-1 badge-glow">
                <TrendingUp className="h-3 w-3" />
                Featured
              </Badge>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full shadow-lg backdrop-blur-sm bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full shadow-lg backdrop-blur-sm bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              // Share functionality
            }}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Price Tag */}
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

      {/* Content */}
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
        <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
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

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{property.features.length - 3} more
            </span>
          )}
        </div>

        {/* Agent Info */}
        {property.agent && (
          <div className="flex items-center justify-between pt-4 border-t border-border/60">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <BadgeCheck className="h-4 w-4 text-primary" />
              </div>
              <div className="text-sm">
                <div className="font-medium">{property.agent.name}</div>
                <div className="text-xs text-muted-foreground">Verified Agent</div>
              </div>
            </div>
            <Button 
              size="sm" 
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(property.id);
              }}
              className="group-hover:shadow-lg group-hover:shadow-primary/20 transition-all"
            >
              View Details
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
