import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

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
      category: 'all',
      district: district,
      minPrice: range.min,
      maxPrice: range.max
    });
    onNavigate('properties');
  };

  return (
    <section className="bg-gradient-to-b from-muted/40 to-background border-b border-border/60">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Find your next home in Kigali
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
            Browse verified listings for rent, sale, and land with one focused search.
          </p>

          <div className="bg-card border border-border rounded-xl p-4 md:p-5 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="lg:col-span-2 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 h-12"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>

              <div>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Listing type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Rent or Buy</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                    <SelectItem value="sale">For Sale</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="h-12">
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

              <div>
                <Select value={district} onValueChange={setDistrict}>
                  <SelectTrigger className="h-12">
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

              <div>
                <Button onClick={handleSearch} className="w-full h-12 gap-2">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
