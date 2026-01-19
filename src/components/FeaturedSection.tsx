import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CarCard from "./CarCard";
import { carsForRent, carsForSale } from "@/data/cars";

interface FeaturedSectionProps {
  type: "rent" | "sale";
}

const FeaturedSection = ({ type }: FeaturedSectionProps) => {
  const cars = type === "rent" ? carsForRent : carsForSale;
  const featuredCars = cars.filter((car) => car.featured).slice(0, 3);
  const displayCars = featuredCars.length > 0 ? featuredCars : cars.slice(0, 3);

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-2">
              {type === "rent" ? "Rental Fleet" : "Available Now"}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              {type === "rent" ? "Cars for Rent" : "Cars for Sale"}
            </h2>
          </div>
          <Link to={type === "rent" ? "/rent" : "/sale"}>
            <Button variant="heroOutline" className="group">
              View All
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
