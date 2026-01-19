import { Car } from "@/types/car";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

export const carsForRent: Car[] = [
  {
    id: "rent-1",
    name: "Golf GTI",
    brand: "Volkswagen",
    image: car1,
    pricePerDay: 50,
    year: 2023,
    mileage: "I pakufizuar",
    fuel: "Benzinë",
    transmission: "Automatike",
    power: "245 HP",
    type: "rent",
    featured: true,
    specs: ["Turbo 2.0L", "0-100 në 6.2s", "Sistem Audio"],
  },
  {
    id: "rent-2",
    name: "Civic Type R",
    brand: "Honda",
    image: car2,
    pricePerDay: 45,
    year: 2024,
    mileage: "I pakufizuar",
    fuel: "Benzinë",
    transmission: "Manuale",
    power: "320 HP",
    type: "rent",
    specs: ["Turbo 2.0L", "Paketë Sport", "Diferencial Limitues"],
  },
  {
    id: "rent-3",
    name: "A3 Sportback",
    brand: "Audi",
    image: car3,
    pricePerDay: 55,
    year: 2023,
    mileage: "I pakufizuar",
    fuel: "Benzinë",
    transmission: "Automatike",
    power: "190 HP",
    type: "rent",
    featured: true,
    specs: ["Turbo 1.5L", "Quattro AWD", "LED Matrix"],
  },
];

export const carsForSale: Car[] = [
  {
    id: "sale-1",
    name: "Passat B8",
    brand: "Volkswagen",
    image: car4,
    salePrice: 18500,
    year: 2022,
    mileage: "42,500 km",
    fuel: "Diesel",
    transmission: "Automatike",
    power: "150 HP",
    type: "sale",
    featured: true,
    specs: ["TDI 2.0L", "Sistem Navigimi", "Kamera Parkimi"],
  },
  {
    id: "sale-2",
    name: "X3 xDrive",
    brand: "BMW",
    image: car5,
    salePrice: 32000,
    year: 2023,
    mileage: "28,200 km",
    fuel: "Benzinë",
    transmission: "Automatike",
    power: "248 HP",
    type: "sale",
    specs: ["Turbo 2.0L", "Pezullim Aktiv", "Paketë Premium"],
  },
  {
    id: "sale-3",
    name: "RAV4 Hybrid",
    brand: "Toyota",
    image: car6,
    salePrice: 28500,
    year: 2023,
    mileage: "15,000 km",
    fuel: "Hibrid",
    transmission: "Automatike",
    power: "219 HP",
    type: "sale",
    featured: true,
    specs: ["Motor Hibrid", "AWD Inteligjent", "Sistemi i Sigurisë"],
  },
];

export const allCars = [...carsForRent, ...carsForSale];
