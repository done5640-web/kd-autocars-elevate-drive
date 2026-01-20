import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Car } from "@/types/car";

const Sale = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('type', 'sale')
        .order('created_at', { ascending: false });

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-50" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <p className="text-primary text-sm uppercase tracking-widest mb-3">
                Në Dispozicion Tani
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
                Makina për <span className="gradient-text">Shitje</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Zotëroni makinën e ëndrrave tuaja. Përzgjedhje premium e automjeteve
                me histori të verifikuar dhe çmime konkurruese.
              </p>
            </div>
          </div>
        </section>

        {/* Cars Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-xl">Duke ngarkuar...</p>
              </div>
            ) : cars.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">Nuk ka makina të disponueshme për shitje në këtë moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Sale;
