export interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  pricePerDay?: number;
  salePrice?: number;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  power: string;
  type: 'rent' | 'sale';
  featured?: boolean;
  specs?: string[];
}
