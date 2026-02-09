import { useState } from 'react';
import { Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import logo from 'figma:asset/ba903176d079dc459036529cf29fe7b6886bb041.png';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  isAuthenticated: boolean;
  userRole?: 'admin' | 'agent' | 'user';
  onLogout: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ currentView, onNavigate, isAuthenticated, userRole, onLogout, isDark, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Rent in Kigali" className="h-12 md:h-14" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentView === 'home' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('properties')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentView === 'properties' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              Properties
            </button>
            <button
              onClick={() => onNavigate('rent')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentView === 'rent' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              For Rent
            </button>
            <button
              onClick={() => onNavigate('sale')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentView === 'sale' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => onNavigate('land')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentView === 'land' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              Land
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentView === 'about' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              About
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            {!isAuthenticated ? (
              <>
                <Button variant="ghost" onClick={() => onNavigate('login')}>
                  Sign In
                </Button>
                <Button onClick={() => onNavigate('register')}>
                  Get Started
                </Button>
              </>
            ) : (
              <>
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
                  className="gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-left transition-colors ${
                  currentView === 'home' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('properties');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-left transition-colors ${
                  currentView === 'properties' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                Properties
              </button>
              <button
                onClick={() => {
                  onNavigate('rent');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-left transition-colors ${
                  currentView === 'rent' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                For Rent
              </button>
              <button
                onClick={() => {
                  onNavigate('sale');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-left transition-colors ${
                  currentView === 'sale' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                For Sale
              </button>
              <button
                onClick={() => {
                  onNavigate('land');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-left transition-colors ${
                  currentView === 'land' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                Land
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-left transition-colors ${
                  currentView === 'about' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                About
              </button>
              
              <div className="border-t border-border my-2"></div>
              
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
                    className="justify-start"
                    onClick={() => {
                      onNavigate('register');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </>
              ) : (
                <>
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