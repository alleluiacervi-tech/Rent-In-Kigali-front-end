import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onSearch: (filters: { query: string; type: string; category: string; district: string }) => void;
  onNavigate: (view: string) => void;
}

const backgroundImages = [
  'https://images.unsplash.com/photo-1618265317491-8b7b2324320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWdhbGklMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjEwOTI0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1648708511872-5426c0f29c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWdhbGklMjByd2FuZGElMjBidWlsZGluZ3N8ZW58MXx8fHwxNzYxMDkyNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1723291653123-ff1befef1365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2l0eSUyMG1vZGVybiUyMGJ1aWxkaW5nc3xlbnwxfHx8fDE3NjEwOTI0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1579518874869-1ad294d2596f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWdhbGklMjBjb252ZW50aW9uJTIwY2VudGVyfGVufDF8fHx8MTc2MTA5MjQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
];

export function Hero({ onSearch, onNavigate }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSearch({
      query: formData.get('query') as string,
      type: formData.get('type') as string,
      category: formData.get('category') as string,
      district: formData.get('district') as string
    });
    onNavigate('properties');
  };

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Rotating Background Images with Overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={backgroundImages[currentImageIndex]}
              alt="Kigali City"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Subtle dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-blue-900/50"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-4 text-white drop-shadow-lg">Find Your Dream Home in Kigali</h1>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Discover the best properties for rent and sale across Kigali's prime locations
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Input
              name="query"
              placeholder="Search by location or keyword..."
              className="bg-input-background"
            />
            
            <Select name="type" defaultValue="all">
              <SelectTrigger className="bg-input-background">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="rent">For Rent</SelectItem>
                <SelectItem value="sale">For Sale</SelectItem>
              </SelectContent>
            </Select>

            <Select name="category" defaultValue="all">
              <SelectTrigger className="bg-input-background">
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

            <Select name="district" defaultValue="all">
              <SelectTrigger className="bg-input-background">
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

          <Button type="submit" className="w-full" size="lg">
            <Search className="h-5 w-5 mr-2" />
            Search Properties
          </Button>
        </form>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          <div className="text-center">
            <h2 className="text-white mb-1 drop-shadow-md">250+</h2>
            <p className="text-white/80 drop-shadow-md">Properties</p>
          </div>
          <div className="text-center">
            <h2 className="text-white mb-1 drop-shadow-md">150+</h2>
            <p className="text-white/80 drop-shadow-md">Happy Clients</p>
          </div>
          <div className="text-center">
            <h2 className="text-white mb-1 drop-shadow-md">10+</h2>
            <p className="text-white/80 drop-shadow-md">Years Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-white mb-1 drop-shadow-md">24/7</h2>
            <p className="text-white/80 drop-shadow-md">Support</p>
          </div>
        </div>

        {/* Slideshow Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
