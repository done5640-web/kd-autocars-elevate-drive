import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
      
      {/* Glow effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Get Started Today
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            Ready to Experience
            <br />
            <span className="gradient-text">Premium Driving?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Contact us today via Instagram or WhatsApp. Our team is ready to help you 
            find your perfect car for rent or purchase.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://instagram.com/kdautocars" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                <Instagram size={20} />
                @kdautocars
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="xl" className="group w-full sm:w-auto">
                <MessageCircle size={20} />
                WhatsApp Us
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
