import { useState } from 'react';
import { Search, MapPin, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroPremiumProps {
  onSearch: (filters: { 
    query: string; 
    type: string; 
    category: string; 
    district: string;
    minPrice: number;
    maxPrice: number;
  }) => void;
  onNavigate: (view: string) => void;
}

export function HeroPremium({ onSearch, onNavigate }: HeroPremiumProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [category, setCategory] = useState('all');
  const [district, setDistrict] = useState('all');
  const [priceRange, setPriceRange] = useState('any');

  const priceRanges = {
    any: { min: 0, max: 100000000 },
    starter: { min: 0, max: 500000 },
    mid: { min: 500000, max: 1500000 },
    premium: { min: 1500000, max: 3500000 },
    elite: { min: 3500000, max: 100000000 }
  };

  const handleSearch = () => {
    const range = priceRanges[priceRange as keyof typeof priceRanges];
    onSearch({
      query: searchQuery,
      type: propertyType,
      category: category,
      district: district,
      minPrice: range.min,
      maxPrice: range.max
    });
    onNavigate('properties');
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-background/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2000&q=80"
          alt="Premium modern home"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center animate-slide-up">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-white/70 mb-5 shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Trusted real estate platform in Kigali</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight tracking-tight text-white drop-shadow-sm">
            Find your next home
            <br />
            <span className="text-white">in Kigali</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Browse verified rentals, homes for sale, and land listings with clear pricing,
            trusted agents, and fast search.
          </p>

          {/* Advanced Search Bar */}
          <div className="bg-white/95 border border-white shadow-xl rounded-2xl p-4 md:p-5 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
              {/* Location Search */}
              <div className="lg:col-span-3 relative input-glow">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 h-12 border border-border/60 bg-white focus-visible:ring-2 focus-visible:ring-primary transition-all"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>

              {/* Property Type */}
              <div className="lg:col-span-2 input-glow">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="h-12 border border-border/60 bg-white focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Rent or Buy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Rent or Buy</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                    <SelectItem value="sale">For Sale</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Category */}
              <div className="lg:col-span-2 input-glow">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-12 border border-border/60 bg-white focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="lg:col-span-2 input-glow">
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="h-12 border border-border/60 bg-white focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Price</SelectItem>
                    <SelectItem value="starter">Under 500K RWF</SelectItem>
                    <SelectItem value="mid">500K - 1.5M</SelectItem>
                    <SelectItem value="premium">1.5M - 3.5M</SelectItem>
                    <SelectItem value="elite">3.5M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* District */}
              <div className="lg:col-span-2 input-glow">
                <Select value={district} onValueChange={setDistrict}>
                  <SelectTrigger className="h-12 border border-border/60 bg-white focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="District" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Districts</SelectItem>
                    <SelectItem value="Gasabo">Gasabo</SelectItem>
                    <SelectItem value="Kicukiro">Kicukiro</SelectItem>
                    <SelectItem value="Nyarugenge">Nyarugenge</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="lg:col-span-1 md:col-span-2">
                <Button 
                  onClick={handleSearch}
                  className="w-full h-12 gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  <Search className="h-5 w-5" />
                  <span className="hidden md:inline">Search</span>
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/60">
              <div className="text-center">
                <div className="text-2xl font-semibold text-foreground mb-1">250+</div>
                <div className="text-sm text-muted-foreground">Verified listings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-foreground mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Happy clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-foreground mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years in Kigali</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
            <span className="text-sm text-white/70">Popular searches:</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                setCategory('apartment');
                setPropertyType('rent');
                handleSearch();
              }}
              className="rounded-full border-white/40 bg-black/20 text-white/90 hover:bg-white hover:text-foreground transition-all"
            >
              Apartments for Rent
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setCategory('villa');
                setPropertyType('sale');
                handleSearch();
              }}
              className="rounded-full border-white/40 bg-black/20 text-white/90 hover:bg-white hover:text-foreground transition-all"
            >
              Villas for Sale
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                onNavigate('land');
              }}
              className="rounded-full border-white/40 bg-black/20 text-white/90 hover:bg-white hover:text-foreground transition-all"
            >
              Land Opportunities
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
}
