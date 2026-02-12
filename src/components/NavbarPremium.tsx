import { useState } from 'react';
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

interface NavbarPremiumProps {
  currentView: string;
  onNavigate: (view: string) => void;
  isAuthenticated: boolean;
  userRole?: 'admin' | 'agent' | 'user';
  onLogout: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function NavbarPremium({ 
  currentView, 
  onNavigate, 
  isAuthenticated, 
  userRole, 
  onLogout, 
  isDark, 
  onToggleTheme 
}: NavbarPremiumProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Browse Listings' },
    { id: 'rent', label: 'Rent' },
    { id: 'sale', label: 'Buy' },
    { id: 'land', label: 'Land' },
    { id: 'about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:opacity-80 transition-opacity"
          >
            <Logo variant={isDark ? 'default' : 'default'} size="md" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            <Button
              variant="ghost"
              className="text-foreground/70 hover:text-foreground"
              asChild
            >
              <a href="mailto:info@rentinkigali.com">Contact Agent</a>
            </Button>

            {!isAuthenticated ? (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => onNavigate('login')}
                  className="text-foreground/70 hover:text-foreground"
                >
                  Sign In
                </Button>
                <Button onClick={() => onNavigate('register')}>Create Account</Button>
              </>
            ) : (
              <>
                {(userRole === 'admin' || userRole === 'agent') && (
                  <Button onClick={() => onNavigate('admin-add-property')}>Add Listing</Button>
                )}
                {(userRole === 'admin' || userRole === 'agent') && (
                  <Button 
                    variant="outline" 
                    onClick={() => onNavigate('dashboard')}
                    className="gap-2"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  onClick={onLogout}
                  className="gap-2 text-foreground/70 hover:text-foreground"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 animate-slide-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-left font-medium transition-colors ${
                    currentView === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="border-t border-border/50 my-4"></div>

              <Button 
                variant="outline"
                className="justify-start"
                onClick={() => {
                  onNavigate('properties');
                  setMobileMenuOpen(false);
                }}
              >
                Browse Listings
              </Button>

              <Button 
                variant="ghost"
                className="justify-start"
                asChild
              >
                <a href="mailto:info@rentinkigali.com">Contact Agent</a>
              </Button>

              {!isAuthenticated ? (
                <>
                  <Button 
                    variant="ghost" 
                    className="justify-start"
                    onClick={() => {
                      onNavigate('login');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="justify-start gap-2"
                    onClick={() => {
                      onNavigate('register');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Create Account
                  </Button>
                </>
              ) : (
                <>
                  {(userRole === 'admin' || userRole === 'agent') && (
                    <Button
                      className="justify-start"
                      onClick={() => {
                        onNavigate('admin-add-property');
                        setMobileMenuOpen(false);
                      }}
                    >
                      Add Listing
                    </Button>
                  )}
                  {(userRole === 'admin' || userRole === 'agent') && (
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2"
                      onClick={() => {
                        onNavigate('dashboard');
                        setMobileMenuOpen(false);
                      }}
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Button>
                  )}
                  <Button 
                    variant="ghost" 
                    className="justify-start gap-2"
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
