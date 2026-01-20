import { MapPin } from "lucide-react";
// Import the image from your local path
import showroomImg from "../assets/kdauto-godina.jpeg";

const LocationSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Photo Column */}
            <div className="card-premium rounded-xl overflow-hidden h-full">
              <img 
                src={showroomImg} 
                alt="KD Autocars Building" 
                className="w-full h-full object-cover min-h-[300px] lg:min-h-full transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Map Column */}
            <div className="card-premium rounded-xl overflow-hidden flex flex-col">
              <div className="flex-grow aspect-video lg:aspect-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.846152349091!2d19.7570453!3d41.3121997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQzLjkiTiAxOcKwNDUnMjUuNCJF!5e0!3m2!1sen!2sal!4v1700000000000!5m2!1sen!2sal"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KD Autocars Location"
                ></iframe>
              </div>
              <div className="p-6 bg-card border-t border-border">
                <a
                  href="https://maps.google.com"
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
      </div>
    </section>
  );
};

export default LocationSection;