import { useState } from 'react';
import { Property } from '../types';
import { PropertyCardPremium } from './PropertyCardPremium';
import { PropertyFilters } from './PropertyFilters';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';

interface PropertyListProps {
  properties: Property[];
  title: string;
  onViewDetails: (id: string) => void;
  showFilters?: boolean;
}

export function PropertyList({ properties, title, onViewDetails, showFilters = true }: PropertyListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [districtFilter, setDistrictFilter] = useState('all');
  const [bedroomsFilter, setBedroomsFilter] = useState('all');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000000);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleFilterChange = (filters: any) => {
    setSearchQuery(filters.query);
    setTypeFilter(filters.type);
    setCategoryFilter(filters.category);
    setDistrictFilter(filters.district);
    setBedroomsFilter(filters.bedrooms);
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'all' || property.type === typeFilter;
    const matchesCategory = categoryFilter === 'all' || property.category === categoryFilter;
    const matchesDistrict = districtFilter === 'all' || property.district === districtFilter;
    const matchesBedrooms = bedroomsFilter === 'all' || property.bedrooms >= parseInt(bedroomsFilter);
    const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
    
    return matchesSearch && matchesType && matchesCategory && matchesDistrict && matchesBedrooms && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-2">{title}</h1>
          <p className="text-muted-foreground">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>

        {showFilters && (
          <>
            <PropertyFilters onSearch={handleFilterChange} />
            
            <div className="property-list-toolbar mb-6">
              <p className="property-list-summary text-sm text-muted-foreground">
                Showing {filteredProperties.length} of {properties.length} properties
              </p>
              <div className="property-list-toolbar-controls flex items-center gap-3">
                <div className="flex gap-1 border border-border rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 property-list-sort-trigger">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}

        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No properties found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setTypeFilter('all');
                setCategoryFilter('all');
                setDistrictFilter('all');
                setBedroomsFilter('all');
                setMinPrice(0);
                setMaxPrice(5000000);
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'flex flex-col gap-6'
          }>
            {filteredProperties.map(property => (
              <PropertyCardPremium
                key={property.id}
                property={property}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
