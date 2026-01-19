import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      {/* Animated glow effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Premium Automotive Experience
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up">
            <span className="text-foreground">Premium Cars</span>
            <br />
            <span className="gradient-text">For Rent & Sale</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 animate-fade-up-delay">
            Experience the thrill of driving luxury and exotic vehicles. 
            Handpicked selection, exceptional service, unforgettable journeys.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay">
            <Link to="/rent">
              <Button variant="hero" size="xl" className="group">
                <Car size={20} />
                Rent a Car
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/sale">
              <Button variant="heroOutline" size="xl" className="group">
                <ShoppingBag size={20} />
                Buy a Car
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-up-delay">
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">50+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Premium Cars</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">1K+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Happy Clients</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">5★</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
