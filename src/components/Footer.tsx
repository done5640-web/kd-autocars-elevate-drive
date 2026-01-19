import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-3xl tracking-wider">
                <span className="text-foreground">KD</span>
                <span className="text-primary">AUTOCARS</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Makina premium me qira dhe për shitje. Përjetoni luksin, performancën dhe stilin
              me përzgjedhjen tonë të kujdesshme të automjeteve.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/kd.autocars"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-4 text-primary">Lidhje të Shpejta</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Ballina
              </Link>
              <Link to="/rent" className="text-muted-foreground hover:text-foreground transition-colors">
                Makina me Qira
              </Link>
              <Link to="/sale" className="text-muted-foreground hover:text-foreground transition-colors">
                Makina për Shitje
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-4 text-primary">Na Kontaktoni</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/kd.autocars"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram size={16} />
                @kd.autocars
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} />
                +1 (234) 567-890
              </a>
              <a
                href="mailto:info@kdautocars.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} />
                info@kdautocars.com
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                Lokacioni Premium
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} KD Autocars. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
