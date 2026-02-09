import { useState } from 'react';
import { Property } from '../types';
import { PropertyCardPremium } from './PropertyCardPremium';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Landmark, MapPin, Ruler, TrendingUp, Search, SlidersHorizontal } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface LandSalesPageProps {
  properties: Property[];
  onViewDetails: (id: string) => void;
}

export function LandSalesPage({ properties, onViewDetails }: LandSalesPageProps) {
  const [districtFilter, setDistrictFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [areaRange, setAreaRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter land properties only
  const landProperties = properties.filter(p => p.category === 'land');

  // Apply filters
  const filteredProperties = landProperties.filter(property => {
    const matchesSearch = !searchQuery || 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDistrict = districtFilter === 'all' || property.district === districtFilter;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = property.price;
      switch (priceRange) {
        case 'under-50m':
          matchesPrice = price < 50000000;
          break;
        case '50m-100m':
          matchesPrice = price >= 50000000 && price < 100000000;
          break;
        case '100m-200m':
          matchesPrice = price >= 100000000 && price < 200000000;
          break;
        case 'over-200m':
          matchesPrice = price >= 200000000;
          break;
      }
    }
    
    let matchesArea = true;
    if (areaRange !== 'all') {
      const area = property.area;
      switch (areaRange) {
        case 'under-500':
          matchesArea = area < 500;
          break;
        case '500-1000':
          matchesArea = area >= 500 && area < 1000;
          break;
        case '1000-2000':
          matchesArea = area >= 1000 && area < 2000;
          break;
        case 'over-2000':
          matchesArea = area >= 2000;
          break;
      }
    }
    
    return matchesSearch && matchesDistrict && matchesPrice && matchesArea;
  });

  const availableLands = filteredProperties.filter(p => p.status === 'available');
  const totalArea = filteredProperties.reduce((sum, p) => sum + p.area, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="h-8 w-8 text-primary" />
              <span className="text-primary">Land Sales Division</span>
            </div>
            <h1 className="mb-4">Premium Land for Sale in Kigali</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Invest in prime real estate land across Kigali's most sought-after locations. 
              Whether you're looking for residential, commercial, or agricultural land, we have the perfect plot for your development needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Landmark className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl">{landProperties.length}</div>
                    <p className="text-sm text-muted-foreground">Total Plots</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl">{availableLands.length}</div>
                    <p className="text-sm text-muted-foreground">Available Now</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Ruler className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl">{totalArea.toLocaleString()}</div>
                    <p className="text-sm text-muted-foreground">Total SQM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5 text-primary" />
            <h3>Filter Land Plots</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* District Filter */}
            <Select value={districtFilter} onValueChange={setDistrictFilter}>
              <SelectTrigger>
                <SelectValue placeholder="District" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Districts</SelectItem>
                <SelectItem value="Gasabo">Gasabo</SelectItem>
                <SelectItem value="Kicukiro">Kicukiro</SelectItem>
                <SelectItem value="Nyarugenge">Nyarugenge</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-50m">Under 50M RWF</SelectItem>
                <SelectItem value="50m-100m">50M - 100M RWF</SelectItem>
                <SelectItem value="100m-200m">100M - 200M RWF</SelectItem>
                <SelectItem value="over-200m">Over 200M RWF</SelectItem>
              </SelectContent>
            </Select>

            {/* Area Range Filter */}
            <Select value={areaRange} onValueChange={setAreaRange}>
              <SelectTrigger>
                <SelectValue placeholder="Area Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sizes</SelectItem>
                <SelectItem value="under-500">Under 500 SQM</SelectItem>
                <SelectItem value="500-1000">500 - 1,000 SQM</SelectItem>
                <SelectItem value="1000-2000">1,000 - 2,000 SQM</SelectItem>
                <SelectItem value="over-2000">Over 2,000 SQM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Clear Filters */}
          {(districtFilter !== 'all' || priceRange !== 'all' || areaRange !== 'all' || searchQuery) && (
            <div className="mt-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setDistrictFilter('all');
                  setPriceRange('all');
                  setAreaRange('all');
                  setSearchQuery('');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="text-foreground">{filteredProperties.length}</span> of{' '}
            <span className="text-foreground">{landProperties.length}</span> land plots
          </p>
        </div>

        {/* Land Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <PropertyCardPremium
                key={property.id}
                property={property}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="mb-2">No Land Plots Found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters to see more results
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setDistrictFilter('all');
                setPriceRange('all');
                setAreaRange('all');
                setSearchQuery('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Why Invest Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-2">Why Invest in Land with Us</h2>
            <p className="text-muted-foreground">Your trusted partner in land acquisition</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Landmark className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2">Prime Locations</h3>
                <p className="text-muted-foreground text-sm">
                  All our land plots are strategically located in Kigali's most developing areas
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2">Clean Titles</h3>
                <p className="text-muted-foreground text-sm">
                  All properties come with verified and clean title deeds for smooth transactions
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground text-sm">
                  Our team provides professional advice on zoning, development, and regulations
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Ruler className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2">Flexible Terms</h3>
                <p className="text-muted-foreground text-sm">
                  We offer flexible payment plans and financing options for qualified buyers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}