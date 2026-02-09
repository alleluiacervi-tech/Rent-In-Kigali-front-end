import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Label } from './ui/label';
import { useState } from 'react';

interface PropertyFiltersProps {
  onSearch: (filters: {
    query: string;
    type: string;
    category: string;
    district: string;
    minPrice: number;
    maxPrice: number;
    bedrooms: string;
  }) => void;
}

export function PropertyFilters({ onSearch }: PropertyFiltersProps) {
  const [filters, setFilters] = useState({
    query: '',
    type: 'all',
    category: 'all',
    district: 'all',
    bedrooms: 'all',
    minPrice: 0,
    maxPrice: 5000000
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handlePriceChange = (value: number[]) => {
    setFilters({ ...filters, minPrice: value[0], maxPrice: value[1] });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2">
            <Input
              name="query"
              placeholder="Search by location, title..."
              value={filters.query}
              onChange={(e) => setFilters({ ...filters, query: e.target.value })}
              className="w-full"
            />
          </div>

          <Select
            value={filters.type}
            onValueChange={(value) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="rent">For Rent</SelectItem>
              <SelectItem value="sale">For Sale</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.category}
            onValueChange={(value) => setFilters({ ...filters, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="property-filters-actions">
          {/* Advanced Filters */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Advanced Filters</SheetTitle>
              </SheetHeader>
              <div className="space-y-6 mt-6">
                <div>
                  <Label>District</Label>
                  <Select
                    value={filters.district}
                    onValueChange={(value) => setFilters({ ...filters, district: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select District" />
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
                  <Label>Bedrooms</Label>
                  <Select
                    value={filters.bedrooms}
                    onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select Bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Price Range</Label>
                  <div className="mt-4 px-2">
                    <Slider
                      value={[filters.minPrice, filters.maxPrice]}
                      onValueChange={handlePriceChange}
                      max={5000000}
                      min={0}
                      step={100000}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{formatPrice(filters.minPrice)}</span>
                      <span>{formatPrice(filters.maxPrice)}</span>
                    </div>
                  </div>
                </div>

                <Button onClick={handleSubmit} className="w-full">
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Button type="submit" className="w-full md:w-auto">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
