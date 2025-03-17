"use client"
import { useEffect, useState } from "react";
import CarList from "../components/cars/carList";
import { Car } from "../lib/types/types";

const cars: Car[] = [
    {
        name: "Schrottreife Konservenbüxe",
        type: "Nissan Pixo",
        price: 100,
        color: "grey",
        isDamaged: true,
        motor: {
            power: 100,
            fuel: "Diesel",
        },
        imageUrl: "/images/pixo.png"
    },
    {
        name: "Luxus Schlitten",
        type: "Mercedes S-Class",
        price: 80000,
        color: "black",
        isDamaged: false,
        motor: {
            power: 450,
            fuel: "Gasoline",
        },
        imageUrl: "/images/pixo.png"
    },
    {
        name: "Stadtflitzer",
        type: "VW Golf",
        price: 25000,
        color: "red",
        isDamaged: false,
        motor: {
            power: 150,
            fuel: "Hybrid",
        },
        imageUrl: "/images/pixo.png"
    }
]

export default function CarsPage() {
    const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
    const [showAffordable, setShowAffordable] = useState(false);
  
    const toggleAffordableCars = () => {
        if (showAffordable) {
            setFilteredCars(cars); // Show all cars
        } else {
            const affordable = cars.filter(car => car.price < 30000);
            setFilteredCars(affordable); // Show affordable cars
        }
        setShowAffordable(!showAffordable);
    };
  
    return (
        <div>
            <button 
                onClick={toggleAffordableCars}
                className="ml-4 p-2 text-white hover:bg-blue-600">
                Filter
            </button>
            <CarList cars={filteredCars}/>
        </div>
    );
}