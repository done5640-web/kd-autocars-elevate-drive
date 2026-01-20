import { Car } from "@/types/car";
import { Button } from "@/components/ui/button";
import { Calendar, Fuel, Gauge, Zap, Instagram, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CarCardProps {
  car: Car;
  onViewDetails?: (car: Car) => void;
}

const CarCard = ({ car, onViewDetails }: CarCardProps) => {
  const isRental = car.type === "rent";
  const navigate = useNavigate();

  return (
    <div className="card-premium rounded-xl overflow-hidden group">
      {/* Image Container */}
      <div
        className="relative aspect-[16/10] overflow-hidden cursor-pointer"
        onClick={() => navigate(`/car/${car.id}`)}
      >
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Featured Badge */}
        {car.featured && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            E Zgjedhur
          </div>
        )}

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/30">
            <span className="text-primary font-bold text-xl">
              {isRental ? `€${car.pricePerDay}` : `€${car.salePrice?.toLocaleString()}`}
            </span>
            {isRental && <span className="text-muted-foreground text-sm">/ditë</span>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div
          className="mb-3 cursor-pointer"
          onClick={() => navigate(`/car/${car.id}`)}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider">{car.brand}</p>
          <h3 className="font-display text-2xl text-foreground hover:text-primary transition-colors">{car.name}</h3>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar size={14} className="text-primary" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Gauge size={14} className="text-primary" />
            <span>{car.mileage}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Fuel size={14} className="text-primary" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Zap size={14} className="text-primary" />
            <span>{car.power}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href="https://instagram.com/kd.autocars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="hero" size="sm" className="w-full">
              <Instagram size={16} />
              Instagram
            </Button>
          </a>
          <a
            href="https://wa.me/355699077779"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="dark" size="sm" className="w-full">
              <MessageCircle size={16} />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
