import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Kreu" },
    { path: "/rent", label: "Me Qera" },
    { path: "/sale", label: "Në Shitje" },
    { path: "/contact", label: "Kontakt" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl tracking-wider">
              <span className="text-foreground">KD</span>
              <span className="text-primary">AUTOCARS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`font-medium text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/kd.autocars"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/355699077779"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              title="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="tel:+355699077779"
              className="text-foreground/70 hover:text-primary transition-colors"
              title="Telefon"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`font-medium text-lg uppercase tracking-wider transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://instagram.com/kd.autocars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  title="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/355699077779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle size={24} />
                </a>
                <a
                  href="tel:+355699077779"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  title="Telefon"
                >
                  <Phone size={24} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
