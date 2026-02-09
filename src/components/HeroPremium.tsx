import { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroPremiumProps {
  onSearch: (filters: { query: string; type: string; category: string; district: string }) => void;
  onNavigate: (view: string) => void;
}

export function HeroPremium({ onSearch, onNavigate }: HeroPremiumProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [category, setCategory] = useState('all');
  const [district, setDistrict] = useState('all');

  const handleSearch = () => {
    onSearch({
      query: searchQuery,
      type: propertyType,
      category: category,
      district: district
    });
    onNavigate('properties');
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcwNTYzMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Rwanda's Premier Real Estate Platform</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find Your Dream Home
            <br />
            <span className="text-primary">In Kigali</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover premium properties for rent and sale. 
            <br className="hidden md:block" />
            Your perfect home awaits in Rwanda's most vibrant city.
          </p>

          {/* Advanced Search Bar */}
          <div className="bg-card border border-border shadow-2xl rounded-2xl p-3 md:p-4 max-w-5xl mx-auto backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Location Search */}
              <div className="md:col-span-4 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 h-12 border-0 bg-muted/50 focus-visible:ring-2 focus-visible:ring-primary transition-all"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>

              {/* Property Type */}
              <div className="md:col-span-3">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="h-12 border-0 bg-muted/50 focus:ring-2 focus:ring-primary">
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
              <div className="md:col-span-3">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-12 border-0 bg-muted/50 focus:ring-2 focus:ring-primary">
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

              {/* Search Button */}
              <div className="md:col-span-2">
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
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">250+</div>
                <div className="text-sm text-muted-foreground">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="text-sm text-muted-foreground">Popular:</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                setCategory('apartment');
                setPropertyType('rent');
                handleSearch();
              }}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
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
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Villas for Sale
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                onNavigate('land');
              }}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
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
