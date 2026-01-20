import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CarCard from "./CarCard";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Car } from "@/types/car";

interface FeaturedSectionProps {
  type: "rent" | "sale";
}

const FeaturedSection = ({ type }: FeaturedSectionProps) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCars();
  }, [type]);

  const fetchCars = async () => {
    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('type', type)
        .eq('featured', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;

      const mappedCars = data?.map(car => ({
        id: car.id,
        created_at: car.created_at,
        name: car.name,
        brand: car.brand,
        image: car.image_url,
        image_url: car.image_url,
        pricePerDay: car.price_per_day,
        price_per_day: car.price_per_day,
        salePrice: car.sale_price,
        sale_price: car.sale_price,
        year: car.year,
        mileage: car.mileage,
        fuel: car.fuel,
        transmission: car.transmission,
        power: car.power,
        engine: car.engine,
        type: car.type,
        featured: car.featured,
        specs: car.specs,
      })) || [];

      setCars(mappedCars);
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return null;
  }

  // Don't render the section if there are no cars
  if (cars.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-2">
              {type === "rent" ? "Flota Jonë" : "Në Dispozicion Tani"}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              {type === "rent" ? "Makina me Qira" : "Makina për Shitje"}
            </h2>
          </div>
          <Link to={type === "rent" ? "/rent" : "/sale"}>
            <Button variant="heroOutline" className="group">
              Shiko Të Gjitha
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
