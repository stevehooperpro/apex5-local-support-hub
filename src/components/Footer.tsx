import { Link } from "react-router-dom";
import { Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-purple text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-apex-purple text-primary-foreground font-extrabold text-sm">
                A5
              </span>
              <span>Apex5</span>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Friendly local tech support in Colchester. Making devices, Wi-Fi and everyday tech less stressful — in plain English.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">All Services</Link></li>
              <li><Link to="/pricing" className="hover:opacity-100 transition-opacity">Pricing</Link></li>
              <li><Link to="/areas" className="hover:opacity-100 transition-opacity">Areas Covered</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
              <li><Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:opacity-100 transition-opacity">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Get in touch</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@apex5.co.uk" className="hover:opacity-100 transition-opacity">info@apex5.co.uk</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Colchester, Essex</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://facebook.com/Apex5" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/Apex5" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@Apex5" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="opacity-70 hover:opacity-100 transition-opacity">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@Apex5" target="_blank" rel="noopener noreferrer" aria-label="TT – TikTok" className="opacity-70 hover:opacity-100 transition-opacity text-xs font-bold">
                TT
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Apex5. All rights reserved.</p>
          <p>Friendly tech support in Colchester, Essex.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
