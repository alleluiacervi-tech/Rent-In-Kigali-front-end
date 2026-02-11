import { useState, useEffect, lazy, Suspense } from 'react';
import { NavbarPremium } from './components/NavbarPremium';
import { HeroPremium } from './components/HeroPremium';
import { FooterPremium } from './components/FooterPremium';
import { PropertyCardPremium } from './components/PropertyCardPremium';
import { SplashScreen } from './components/SplashScreen';
import { WhatsAppChat } from './components/WhatsAppChat';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { mockProperties, dashboardStats } from './lib/mock-data';
import { Property, User } from './types';
import { toast, Toaster } from 'sonner';
import { Building2, Home, TrendingUp, Sparkles } from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';

const PropertyList = lazy(() =>
  import('./components/PropertyList').then((module) => ({
    default: module.PropertyList
  }))
);

const PropertyDetail = lazy(() =>
  import('./components/PropertyDetail').then((module) => ({
    default: module.PropertyDetail
  }))
);

const AboutPage = lazy(() =>
  import('./components/AboutPage').then((module) => ({
    default: module.AboutPage
  }))
);

const LoginPage = lazy(() =>
  import('./components/AuthPages').then((module) => ({
    default: module.LoginPage
  }))
);

const RegisterPage = lazy(() =>
  import('./components/AuthPages').then((module) => ({
    default: module.RegisterPage
  }))
);

const AdminDashboard = lazy(() =>
  import('./components/AdminDashboard').then((module) => ({
    default: module.AdminDashboard
  }))
);

const AdminPropertyManagement = lazy(() =>
  import('./components/AdminPropertyManagement').then((module) => ({
    default: module.AdminPropertyManagement
  }))
);

const AdminAddProperty = lazy(() =>
  import('./components/AdminAddProperty').then((module) => ({
    default: module.AdminAddProperty
  }))
);

const LandSalesPage = lazy(() =>
  import('./components/LandSalesPage').then((module) => ({
    default: module.LandSalesPage
  }))
);

function PageLoader() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-48 rounded bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-3/4 rounded bg-muted" />
      </div>
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    query: '',
    type: '',
    category: '',
    district: '',
    minPrice: 0,
    maxPrice: 5000000
  });

  // Show splash screen for 3 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleLogin = (email: string, password: string) => {
    // Demo login logic
    if (email === 'admin@rentinkigali.com' && password === 'admin123') {
      const user: User = {
        id: '1',
        email: email,
        name: 'Admin User',
        role: 'admin'
      };
      setCurrentUser(user);
      setIsAuthenticated(true);
      toast.success('Welcome back, Admin!');
      handleNavigate('dashboard');
    } else if (email === 'agent@rentinkigali.com' && password === 'agent123') {
      const user: User = {
        id: '2',
        email: email,
        name: 'Agent User',
        role: 'agent'
      };
      setCurrentUser(user);
      setIsAuthenticated(true);
      toast.success('Welcome back, Agent!');
      handleNavigate('dashboard');
    } else {
      toast.error('Invalid credentials. Try admin@rentinkigali.com / admin123');
    }
  };

  const handleRegister = (name: string, email: string, password: string) => {
    const user: User = {
      id: Date.now().toString(),
      email: email,
      name: name,
      role: 'user'
    };
    setCurrentUser(user);
    setIsAuthenticated(true);
    toast.success('Account created successfully!');
    handleNavigate('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
    handleNavigate('home');
  };

  const handleViewProperty = (id: string) => {
    setSelectedPropertyId(id);
    handleNavigate('property-detail');
  };

  const handleSearch = (filters: { 
    query: string; 
    type: string; 
    category: string; 
    district: string;
    minPrice: number;
    maxPrice: number;
  }) => {
    setSearchFilters(filters);
  };

  const handleSaveProperty = (propertyData: Partial<Property>) => {
    if (selectedPropertyId && currentView === 'admin-edit-property') {
      // Edit existing property
      setProperties(properties.map(p => 
        p.id === selectedPropertyId 
          ? { ...p, ...propertyData } as Property
          : p
      ));
    } else {
      // Add new property
      const newProperty: Property = {
        id: Date.now().toString(),
        title: propertyData.title || '',
        description: propertyData.description || '',
        price: propertyData.price || 0,
        location: propertyData.location || '',
        district: propertyData.district || 'Gasabo',
        bedrooms: propertyData.bedrooms || 0,
        bathrooms: propertyData.bathrooms || 0,
        area: propertyData.area || 0,
        type: propertyData.type || 'rent',
        category: propertyData.category || 'apartment',
        images: propertyData.images || [],
        features: propertyData.features || [],
        status: propertyData.status || 'available',
        createdAt: new Date().toISOString(),
        agent: {
          name: currentUser?.name || 'Agent',
          phone: '+250 788 000 000',
          email: currentUser?.email || 'agent@rentinkigali.com'
        }
      };
      setProperties([newProperty, ...properties]);
    }
  };

  const handleDeleteProperty = (id: string) => {
    setProperties(properties.filter(p => p.id !== id));
    toast.success('Property deleted successfully');
  };

  const handleEditProperty = (id: string) => {
    setSelectedPropertyId(id);
    handleNavigate('admin-edit-property');
  };

  const getFilteredProperties = () => {
    return properties.filter(property => {
      const matchesQuery = !searchFilters.query || 
        property.title.toLowerCase().includes(searchFilters.query.toLowerCase()) ||
        property.location.toLowerCase().includes(searchFilters.query.toLowerCase());
      const matchesType = !searchFilters.type || searchFilters.type === 'all' || property.type === searchFilters.type;
      const matchesCategory = !searchFilters.category || searchFilters.category === 'all' || property.category === searchFilters.category;
      const matchesDistrict = !searchFilters.district || searchFilters.district === 'all' || property.district === searchFilters.district;
      const matchesPrice = property.price >= searchFilters.minPrice && property.price <= searchFilters.maxPrice;
      
      return matchesQuery && matchesType && matchesCategory && matchesDistrict && matchesPrice;
    });
  };

  const selectedProperty = selectedPropertyId ? properties.find(p => p.id === selectedPropertyId) : null;

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <HeroPremium onSearch={handleSearch} onNavigate={handleNavigate} />
            
            {/* Featured Carousel */}
            <div className="container mx-auto px-4 py-16">
              <div className="mb-8">
                <h2 className="mb-2">Premium Properties</h2>
                <p className="text-muted-foreground">Auto-rotating showcase of our finest properties</p>
              </div>
              <FeaturedCarousel 
                properties={properties.filter(p => p.status === 'available').slice(0, 5)} 
                onViewDetails={handleViewProperty}
              />
            </div>

            {/* Featured Properties */}
            <div className="container mx-auto px-4 py-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="mb-2">Featured Properties</h2>
                  <p className="text-muted-foreground">Discover our hand-picked selection of premium properties</p>
                </div>
                <Button onClick={() => handleNavigate('properties')} variant="outline">
                  View All Properties
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.slice(0, 6).map(property => (
                  <PropertyCardPremium
                    key={property.id}
                    property={property}
                    onViewDetails={handleViewProperty}
                  />
                ))}
              </div>
            </div>

            {/* Property Types */}
            <div className="bg-muted py-16">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="mb-2">Browse by Category</h2>
                  <p className="text-muted-foreground">Find the perfect property type for your needs</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => {
                    setSearchFilters({ ...searchFilters, type: 'rent' });
                    handleNavigate('rent');
                  }}>
                    <CardContent className="p-8 text-center">
                      <Home className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="mb-2">For Rent</h3>
                      <p className="text-muted-foreground mb-4">
                        Find your perfect rental property
                      </p>
                      <p className="text-2xl">{properties.filter(p => p.type === 'rent').length}+ Properties</p>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => {
                    setSearchFilters({ ...searchFilters, type: 'sale' });
                    handleNavigate('sale');
                  }}>
                    <CardContent className="p-8 text-center">
                      <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="mb-2">For Sale</h3>
                      <p className="text-muted-foreground mb-4">
                        Invest in your dream property
                      </p>
                      <p className="text-2xl">{properties.filter(p => p.type === 'sale').length}+ Properties</p>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => {
                    handleNavigate('land');
                  }}>
                    <CardContent className="p-8 text-center">
                      <Building2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="mb-2">Land</h3>
                      <p className="text-muted-foreground mb-4">
                        Premium land for development
                      </p>
                      <p className="text-2xl">{properties.filter(p => p.category === 'land').length}+ Plots</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-12">
                <h2 className="mb-2">Why Choose Rent in Kigali</h2>
                <p className="text-muted-foreground">Your trusted partner in real estate</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">250+</div>
                    <p className="text-muted-foreground">Properties</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">150+</div>
                    <p className="text-muted-foreground">Happy Clients</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">10+</div>
                    <p className="text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">24/7</div>
                    <p className="text-muted-foreground">Support</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        );

      case 'properties':
        return (
          <PropertyList
            properties={getFilteredProperties()}
            title="All Properties"
            onViewDetails={handleViewProperty}
          />
        );

      case 'rent':
        return (
          <PropertyList
            properties={properties.filter(p => p.type === 'rent')}
            title="Properties for Rent"
            onViewDetails={handleViewProperty}
          />
        );

      case 'sale':
        return (
          <PropertyList
            properties={properties.filter(p => p.type === 'sale')}
            title="Properties for Sale"
            onViewDetails={handleViewProperty}
          />
        );

      case 'land':
        return (
          <LandSalesPage
            properties={properties}
            onViewDetails={handleViewProperty}
          />
        );

      case 'property-detail':
        return selectedProperty ? (
          <PropertyDetail
            property={selectedProperty}
            onBack={() => handleNavigate('properties')}
          />
        ) : (
          <div>Property not found</div>
        );

      case 'about':
        return <AboutPage />;

      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />;

      case 'register':
        return <RegisterPage onRegister={handleRegister} onNavigate={handleNavigate} />;

      case 'dashboard':
        return (
          <AdminDashboard
            stats={dashboardStats}
            onNavigate={handleNavigate}
          />
        );

      case 'admin-properties':
        return (
          <AdminPropertyManagement
            properties={properties}
            onNavigate={handleNavigate}
            onViewProperty={handleViewProperty}
            onEditProperty={handleEditProperty}
            onDeleteProperty={handleDeleteProperty}
          />
        );

      case 'admin-add-property':
        return (
          <AdminAddProperty
            onNavigate={handleNavigate}
            onSave={handleSaveProperty}
          />
        );

      case 'admin-edit-property':
        return selectedProperty ? (
          <AdminAddProperty
            property={selectedProperty}
            onNavigate={handleNavigate}
            onSave={handleSaveProperty}
          />
        ) : (
          <div>Property not found</div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  // Show splash screen first
  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" richColors />
      
      {currentView !== 'login' && currentView !== 'register' && (
        <NavbarPremium
          currentView={currentView}
          onNavigate={handleNavigate}
          isAuthenticated={isAuthenticated}
          userRole={currentUser?.role}
          onLogout={handleLogout}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />
      )}

      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          {renderView()}
        </Suspense>
      </main>

      {currentView !== 'login' && currentView !== 'register' && <FooterPremium />}
      
      {/* WhatsApp Chat Widget - visible on all pages except splash */}
      <WhatsAppChat />
    </div>
  );
}
