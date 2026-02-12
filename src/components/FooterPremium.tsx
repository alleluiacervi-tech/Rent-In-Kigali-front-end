import { Logo } from './Logo';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

interface FooterPremiumProps {
  isDark?: boolean;
}

export function FooterPremium({ isDark = false }: FooterPremiumProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo variant={isDark ? 'default' : 'default'} size="md" className="mb-6" />
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Rent in Kigali helps clients find verified rental, sale, and land listings across Kigali.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <div className="p-2 bg-primary/10 rounded-md">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground break-words">
                  8KN 4Avenue, Kigali, Rwanda 250
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className="p-2 bg-primary/10 rounded-md">
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
                <div className="p-2 bg-primary/10 rounded-md">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:info@rentinkigali.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@rentinkigali.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <p className="text-sm text-muted-foreground">
              Need help with a listing or viewing? Reach our team directly on WhatsApp.
            </p>

            <a
              href="https://wa.me/250785514692"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground text-center md:text-left">
            <span className="break-words">© {currentYear} Rent in Kigali. All rights reserved.</span>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
