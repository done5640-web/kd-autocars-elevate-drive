import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft } from 'lucide-react';

export default function CarForm() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    image_url: '',
    price_per_day: '',
    sale_price: '',
    year: new Date().getFullYear(),
    mileage: '',
    fuel: '',
    transmission: '',
    power: '',
    engine: '',
    type: 'rent' as 'rent' | 'sale',
    featured: false,
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (id && id !== 'new') {
      fetchCar();
    }
  }, [user, id, navigate]);

  const fetchCar = async () => {
    if (!id || id === 'new') return;

    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setFormData({
        name: data.name,
        brand: data.brand,
        image_url: data.image_url,
        price_per_day: data.price_per_day?.toString() || '',
        sale_price: data.sale_price?.toString() || '',
        year: data.year,
        mileage: data.mileage,
        fuel: data.fuel,
        transmission: data.transmission,
        power: data.power,
        engine: data.engine,
        type: data.type,
        featured: data.featured,
      });
    } catch (error) {
      toast({
        title: 'Gabim',
        description: 'Nuk u ngarua automjeti',
        variant: 'destructive',
      });
      navigate('/admin');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `cars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('car-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('car-images').getPublicUrl(filePath);

      setFormData({ ...formData, image_url: data.publicUrl });

      toast({
        title: 'Sukses',
        description: 'Foto u ngarkua me sukses',
      });
    } catch (error) {
      toast({
        title: 'Gabim',
        description: 'Foto nuk u ngarkua',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const carData = {
        name: formData.name,
        brand: formData.brand,
        image_url: formData.image_url,
        price_per_day: formData.type === 'rent' ? parseFloat(formData.price_per_day) : null,
        sale_price: formData.type === 'sale' ? parseFloat(formData.sale_price) : null,
        year: formData.year,
        mileage: formData.mileage,
        fuel: formData.fuel,
        transmission: formData.transmission,
        power: formData.power,
        engine: formData.engine,
        type: formData.type,
        featured: formData.featured,
      };

      if (id && id !== 'new') {
        const { error } = await supabase
          .from('cars')
          .update(carData)
          .eq('id', id);

        if (error) throw error;

        toast({
          title: 'Sukses',
          description: 'Automjeti u përditësua me sukses',
        });
      } else {
        const { error } = await supabase.from('cars').insert([carData]);

        if (error) throw error;

        toast({
          title: 'Sukses',
          description: 'Automjeti u shtua me sukses',
        });
      }

      navigate('/admin');
    } catch (error) {
      toast({
        title: 'Gabim',
        description: id && id !== 'new' ? 'Automjeti nuk u përditësua' : 'Automjeti nuk u shtua',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/admin')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kthehu
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bebas">
              {id && id !== 'new' ? 'PËRDITËSO AUTOMJETIN' : 'SHTO AUTOMJET TË RI'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Emri i Automjetit</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand">Marka</Label>
                  <Input
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Viti</Label>
                  <Input
                    id="year"
                    type="number"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="engine">Motorri (p.sh. 2.0 TDI)</Label>
                  <Input
                    id="engine"
                    value={formData.engine}
                    onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Tipi</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value: 'rent' | 'sale') =>
                      setFormData({ ...formData, type: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rent">Me Qera</SelectItem>
                      <SelectItem value="sale">Në Shitje</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.type === 'rent' ? (
                  <div className="space-y-2">
                    <Label htmlFor="price_per_day">Çmimi për Ditë (€)</Label>
                    <Input
                      id="price_per_day"
                      type="number"
                      step="0.01"
                      value={formData.price_per_day}
                      onChange={(e) => setFormData({ ...formData, price_per_day: e.target.value })}
                      required
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="sale_price">Çmimi i Shitjes (€)</Label>
                    <Input
                      id="sale_price"
                      type="number"
                      step="0.01"
                      value={formData.sale_price}
                      onChange={(e) => setFormData({ ...formData, sale_price: e.target.value })}
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="mileage">Kilometrazhi (opsionale)</Label>
                  <Input
                    id="mileage"
                    value={formData.mileage}
                    onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                    placeholder="p.sh. 50,000 km"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fuel">Karburanti</Label>
                  <Input
                    id="fuel"
                    value={formData.fuel}
                    onChange={(e) => setFormData({ ...formData, fuel: e.target.value })}
                    placeholder="p.sh. Diesel"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transmission">Transmisioni (opsionale)</Label>
                  <Input
                    id="transmission"
                    value={formData.transmission}
                    onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                    placeholder="p.sh. Automatik"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="power">Fuqia (opsionale)</Label>
                  <Input
                    id="power"
                    value={formData.power}
                    onChange={(e) => setFormData({ ...formData, power: e.target.value })}
                    placeholder="p.sh. 150 HP"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Foto e Automjetit</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
                {formData.image_url && (
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="mt-2 w-full h-48 object-cover rounded"
                  />
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, featured: checked as boolean })
                  }
                />
                <Label htmlFor="featured" className="cursor-pointer">
                  Shfaq në faqen kryesore (Featured)
                </Label>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/admin')}
                  className="flex-1"
                >
                  Anulo
                </Button>
                <Button type="submit" disabled={loading || uploading} className="flex-1">
                  {loading ? 'Duke ruajtur...' : id && id !== 'new' ? 'Përditëso' : 'Shto'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
