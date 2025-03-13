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
        }
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
        }
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
        }
    }
]

export default function CarsPage() {
  return (
    <CarList cars={cars}/>
  );
}