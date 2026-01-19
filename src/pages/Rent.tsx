import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import CTASection from "@/components/CTASection";
import { carsForRent } from "@/data/cars";

const Rent = () => {
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
                Our Fleet
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
                Cars for <span className="gradient-text">Rent</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Experience the thrill of driving premium and exotic cars. 
                Daily, weekly, or monthly rentals available with unlimited mileage.
              </p>
            </div>
          </div>
        </section>

        {/* Cars Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carsForRent.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Rent;
