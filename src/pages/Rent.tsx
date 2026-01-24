import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Car } from "@/types/car";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Rent = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    fetchCars();
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const fetchCars = async () => {
    try {
      // Get total count
      const { count } = await supabase
        .from('cars')
        .select('*', { count: 'exact', head: true })
        .eq('type', 'rent');

      setTotalCount(count || 0);

      // Get paginated data
      const from = (currentPage - 1) * ITEMS_PER_PAGE;
      const to = from + ITEMS_PER_PAGE - 1;

      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('type', 'rent')
        .order('created_at', { ascending: false })
        .range(from, to);

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
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <p className="text-primary text-sm uppercase tracking-widest mb-3">
                Flota Jonë
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
                Makina me <span className="gradient-text">Qira</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Përjetoni emocionin e drejtimit të makinave premium.
                Qira ditore, javore ose mujore të disponueshme me kilometrazh të pakufizuar.
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
                <p className="text-xl text-muted-foreground">Nuk ka makina të disponueshme për qira në këtë moment.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>

                {/* Pagination */}
                {totalCount > ITEMS_PER_PAGE && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Mbrapa
                    </Button>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.ceil(totalCount / ITEMS_PER_PAGE) }, (_, i) => i + 1)
                        .filter(page => {
                          const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
                          return page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
                        })
                        .map((page, index, array) => (
                          <div key={page} className="flex items-center">
                            {index > 0 && array[index - 1] !== page - 1 && (
                              <span className="px-2 text-muted-foreground">...</span>
                            )}
                            <Button
                              variant={currentPage === page ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </Button>
                          </div>
                        ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(p => Math.min(Math.ceil(totalCount / ITEMS_PER_PAGE), p + 1))}
                      disabled={currentPage >= Math.ceil(totalCount / ITEMS_PER_PAGE)}
                    >
                      Para
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                )}
              </>
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

export default Rent;
