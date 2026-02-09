import { Logo } from './Logo';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface FooterPremiumProps {
  isDark?: boolean;
}

export function FooterPremium({ isDark = false }: FooterPremiumProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant={isDark ? 'default' : 'default'} size="md" className="mb-6" />
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Rwanda's premier real estate platform connecting you with your dream properties. 
              Professional service, trusted expertise, and a commitment to excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  8KN 4Avenue, Kigali, Rwanda 250
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+250782359111" className="text-muted-foreground hover:text-primary transition-colors">
                    +250 782 359 111
                  </a>
                  <a href="tel:+250785514692" className="text-muted-foreground hover:text-primary transition-colors">
                    +250 785 514 692
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:info@rentinkigali.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@rentinkigali.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Properties', 'For Rent', 'For Sale', 'Land', 'About Us'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Property Guides', 'Market Insights', 'Investment Tips', 'FAQs', 'Contact Support'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest properties and market insights delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background"
              />
              <Button className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Legal */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: MessageCircle, href: 'https://wa.me/250785514692' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>© {currentYear} Rent in Kigali. All rights reserved.</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="border-t border-border bg-primary/5">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-muted-foreground">
            <span className="font-medium text-primary">Real Estate Service</span> - Getting real about real estate - We are a professional real estate agency in Rwanda - Just here for you.
          </p>
        </div>
      </div>
    </footer>
  );
}
