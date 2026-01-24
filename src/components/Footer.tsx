import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
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
                href="https://wa.me/355699077779"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Phone size={20} />
              </a>
            </div>
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
                href="tel:+355699077779"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} />
                +355 69 907 7779
              </a>
              <a
                href="mailto:kdrentalcar@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} />
                kdrentalcar@gmail.com
              </a>
              <a
                href="https://maps.app.goo.gl/u6wKZB7DtjPEDNHH8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin size={16} />
                Shiko Lokacionin
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} KD Autocars. Të gjitha të drejtat e rezervuara.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Zhvilluar nga <span className="text-primary font-medium">Alar Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
