import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Plus, LogOut, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function Admin() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchCars();
  }, [user, navigate, currentPage]);

  const fetchCars = async () => {
    try {
      // Get total count
      const { count } = await supabase
        .from('cars')
        .select('*', { count: 'exact', head: true });

      setTotalCount(count || 0);

      // Get paginated data
      const from = (currentPage - 1) * ITEMS_PER_PAGE;
      const to = from + ITEMS_PER_PAGE - 1;

      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .order('created_at', { ascending: false })
        .range(from, to);

      if (error) throw error;

      // Map database fields to Car interface
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
      toast({
        title: 'Gabim',
        description: 'Nuk u ngarkuan automjetet',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from('cars').delete().eq('id', id);

      if (error) throw error;

      toast({
        title: 'Sukses',
        description: 'Automjeti u fshi me sukses',
      });

      fetchCars();
    } catch (error) {
      toast({
        title: 'Gabim',
        description: 'Automjeti nuk u fshi',
        variant: 'destructive',
      });
    }
    setDeleteId(null);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Duke ngarkuar...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bebas">ADMIN DASHBOARD</h1>
          <div className="flex gap-4">
            <Button onClick={() => navigate('/admin/car/new')}>
              <Plus className="mr-2 h-4 w-4" />
              Shto Automjet
            </Button>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Dil
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Foto</TableHead>
                <TableHead>Emri</TableHead>
                <TableHead>Marka</TableHead>
                <TableHead>Viti</TableHead>
                <TableHead>Motorri</TableHead>
                <TableHead>Tipi</TableHead>
                <TableHead>Çmimi</TableHead>
                <TableHead className="text-right">Veprime</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cars.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8">
                    Nuk ka automjete. Shto një automjet për të filluar.
                  </TableCell>
                </TableRow>
              ) : (
                cars.map((car) => (
                  <TableRow key={car.id}>
                    <TableCell>
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{car.name}</TableCell>
                    <TableCell>{car.brand}</TableCell>
                    <TableCell>{car.year}</TableCell>
                    <TableCell>{car.engine}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          car.type === 'rent'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-green-500/20 text-green-300'
                        }`}
                      >
                        {car.type === 'rent' ? 'Me Qera' : 'Në Shitje'}
                      </span>
                    </TableCell>
                    <TableCell>
                      {car.type === 'rent'
                        ? `€${car.pricePerDay}/ditë`
                        : `€${car.salePrice}`}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => navigate(`/admin/car/${car.id}`)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setDeleteId(car.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-400" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {totalCount > ITEMS_PER_PAGE && (
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              Duke shfaqur {(currentPage - 1) * ITEMS_PER_PAGE + 1} deri {Math.min(currentPage * ITEMS_PER_PAGE, totalCount)} nga {totalCount} automjete
            </div>
            <div className="flex gap-2">
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
                    // Show first page, last page, current page, and pages around current
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
          </div>
        )}
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Jeni i sigurt?</AlertDialogTitle>
            <AlertDialogDescription>
              Ky veprim nuk mund të zhbëhet. Kjo do të fshijë përfundimisht automjetin.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Anulo</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteId && handleDelete(deleteId)}>
              Fshi
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
