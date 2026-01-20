import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-widest mb-2">
              Vizitoni Sallonin Tonë
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Gjeni <span className="gradient-text">Lokacionin</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Na vizitoni për të parë automjetet tona premium nga afër
            </p>
          </div>

          {/* Map Container */}
          <div className="card-premium rounded-xl overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3872749366866!2d19.819343376544826!3d41.32821399933906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5b1%3A0x440partly8ec3c5c51!2sTirana%2C%20Albania!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KD Autocars Location"
              ></iframe>
            </div>
            <div className="p-6 bg-card border-t border-border">
              <a
                href="https://maps.app.goo.gl/u6wKZB7DtjPEDNHH8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <MapPin size={20} />
                Hap në Google Maps për udhëzime
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
