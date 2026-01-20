export interface Car {
  id: string;
  created_at?: string;
  name: string;
  brand: string;
  image: string;
  image_url?: string; // For database compatibility
  pricePerDay?: number;
  price_per_day?: number; // For database compatibility
  salePrice?: number;
  sale_price?: number; // For database compatibility
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  power: string;
  engine: string; // Added engine field
  type: 'rent' | 'sale';
  featured?: boolean;
  specs?: string[];
}
