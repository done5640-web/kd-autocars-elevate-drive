import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, ShoppingBag, Star } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
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
      <div className="container mx-auto px-4 relative z-10 pt-20 max-w-full">
        <div className="max-w-3xl w-full ml-8 md:ml-16 lg:ml-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Përvojë Premium Automobilistike
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up font-bold">
            <span className="text-foreground font-extrabold">Makina Premium</span>
            <br />
            <span className="gradient-text font-extrabold">Me Qira & Shitje</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 animate-fade-up-delay">
            Përjetoni emocionin e drejtimit të automjeteve premium.
            Përzgjedhje e kujdesshme, shërbim i jashtëzakonshëm, udhëtime të paharrueshme.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay">
            <Link to="/rent">
              <Button variant="hero" size="xl" className="group">
                <Car size={20} />
                Marrja me Qira
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/sale">
              <Button variant="heroOutline" size="xl" className="group">
                <ShoppingBag size={20} />
                Blini Makinë
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Reviews */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-up-delay space-y-6">
            <h3 className="text-primary text-sm uppercase tracking-widest font-medium">Çfarë thonë klientët tanë</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-5">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm mb-3 leading-relaxed">
                  "Shërbim fantastik! Makina ishte e pastër, moderne dhe shumë e rehatshme për udhëtimin tonë."
                </p>
                <p className="text-muted-foreground text-xs font-medium">— Ardit M.</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-5">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm mb-3 leading-relaxed">
                  "Proces shumë i lehtë dhe profesional. Do t'i rekomandoj të gjithëve!"
                </p>
                <p className="text-muted-foreground text-xs font-medium">— Elira K.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">Lëviz Poshtë</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
