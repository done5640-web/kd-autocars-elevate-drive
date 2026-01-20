import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Fuel, Gauge, Settings, Instagram, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchCar();
    }
  }, [id]);

  const fetchCar = async () => {
    if (!id) return;

    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      const mappedCar: Car = {
        id: data.id,
        created_at: data.created_at,
        name: data.name,
        brand: data.brand,
        image: data.image_url,
        image_url: data.image_url,
        pricePerDay: data.price_per_day,
        price_per_day: data.price_per_day,
        salePrice: data.sale_price,
        sale_price: data.sale_price,
        year: data.year,
        mileage: data.mileage,
        fuel: data.fuel,
        transmission: data.transmission,
        power: data.power,
        engine: data.engine,
        type: data.type,
        featured: data.featured,
        specs: data.specs,
      };

      setCar(mappedCar);
    } catch (error) {
      toast({
        title: 'Gabim',
        description: 'Nuk u ngarua automjeti',
        variant: 'destructive',
      });
      navigate(-1);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Duke ngarkuar...</div>
      </div>
    );
  }

  if (!car) {
    return null;
  }

  const whatsappUrl = `https://wa.me/355699077779?text=${encodeURIComponent(
    `Përshëndetje! Jam i interesuar për ${car.name} ${car.type === 'rent' ? 'me qera' : 'në shitje'}.`
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kthehu
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bebas mb-2">{car.name}</h1>
              <p className="text-xl text-muted-foreground">{car.brand}</p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">
                {car.type === 'rent' ? `€${car.pricePerDay}` : `€${car.salePrice}`}
              </span>
              {car.type === 'rent' && <span className="text-muted-foreground">/ditë</span>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Viti</span>
                </div>
                <p className="text-lg font-semibold">{car.year}</p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Gauge className="h-4 w-4" />
                  <span className="text-sm">Kilometrazhi</span>
                </div>
                <p className="text-lg font-semibold">{car.mileage}</p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Fuel className="h-4 w-4" />
                  <span className="text-sm">Karburanti</span>
                </div>
                <p className="text-lg font-semibold">{car.fuel}</p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Settings className="h-4 w-4" />
                  <span className="text-sm">Transmisioni</span>
                </div>
                <p className="text-lg font-semibold">{car.transmission}</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bebas mb-4">DETAJE TEKNIKE</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Motorri:</span>
                  <span className="font-semibold">{car.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fuqia:</span>
                  <span className="font-semibold">{car.power}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tipi:</span>
                  <span className="font-semibold">
                    {car.type === 'rent' ? 'Me Qera' : 'Në Shitje'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                className="flex-1 bg-primary hover:bg-primary/90"
                size="lg"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Kontakto në WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <a
                  href="https://www.instagram.com/kd.autocars"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
