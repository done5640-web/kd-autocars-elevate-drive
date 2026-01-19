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
    name: "AMG GT",
    brand: "Mercedes-Benz",
    image: car1,
    pricePerDay: 450,
    year: 2023,
    mileage: "Unlimited",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "585 HP",
    type: "rent",
    featured: true,
    specs: ["V8 Biturbo", "0-100 in 3.2s", "Premium Sound"],
  },
  {
    id: "rent-2",
    name: "M4 Competition",
    brand: "BMW",
    image: car2,
    pricePerDay: 350,
    year: 2024,
    mileage: "Unlimited",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "530 HP",
    type: "rent",
    specs: ["Twin-Turbo I6", "Carbon Package", "M Differential"],
  },
  {
    id: "rent-3",
    name: "RS7 Sportback",
    brand: "Audi",
    image: car3,
    pricePerDay: 400,
    year: 2023,
    mileage: "Unlimited",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "600 HP",
    type: "rent",
    featured: true,
    specs: ["V8 Twin-Turbo", "Quattro AWD", "Matrix LED"],
  },
];

export const carsForSale: Car[] = [
  {
    id: "sale-1",
    name: "Huracán EVO",
    brand: "Lamborghini",
    image: car4,
    salePrice: 285000,
    year: 2022,
    mileage: "12,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "640 HP",
    type: "sale",
    featured: true,
    specs: ["V10 Naturally Aspirated", "LDVI System", "Carbon Ceramic Brakes"],
  },
  {
    id: "sale-2",
    name: "Cayenne Turbo GT",
    brand: "Porsche",
    image: car5,
    salePrice: 195000,
    year: 2023,
    mileage: "8,200 km",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "640 HP",
    type: "sale",
    specs: ["V8 Twin-Turbo", "Active Suspension", "Sport Chrono"],
  },
  {
    id: "sale-3",
    name: "Range Rover Sport SVR",
    brand: "Land Rover",
    image: car6,
    salePrice: 165000,
    year: 2023,
    mileage: "15,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "575 HP",
    type: "sale",
    featured: true,
    specs: ["Supercharged V8", "Terrain Response", "Meridian Audio"],
  },
];

export const allCars = [...carsForRent, ...carsForSale];
