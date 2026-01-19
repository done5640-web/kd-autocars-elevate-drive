import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { carsForSale } from "@/data/cars";

const Sale = () => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carsForSale.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
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
