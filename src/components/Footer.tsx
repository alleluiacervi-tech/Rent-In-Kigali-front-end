import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Home, Briefcase, CheckCircle, Smartphone } from 'lucide-react';
import logo from 'figma:asset/ba903176d079dc459036529cf29fe7b6886bb041.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Rent in Kigali" className="h-10 mb-4 brightness-0 invert" />
            <div className="text-sm text-blue-100 mb-4 space-y-1.5">
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Getting real about real estate</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Professional real estate agency in Rwanda</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Just here for you</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Properties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Rent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Sale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="mb-4 text-white">Property Types</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Apartments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Houses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Villas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Studios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Land</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>8KN 4Avenue, Kigali, Rwanda 250</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="h-3 w-3" />
                    <a href="tel:+250785514692" className="hover:text-white transition-colors">+250 785 514 692</a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="h-3 w-3" />
                    <a href="tel:+250782359111" className="hover:text-white transition-colors">+250 782 359 111</a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@rentinkigali.com" className="hover:text-white transition-colors">info@rentinkigali.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-blue-100">
          <p>&copy; {new Date().getFullYear()} Rent in Kigali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}