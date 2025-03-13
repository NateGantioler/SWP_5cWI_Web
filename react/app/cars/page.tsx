import Card from "../components/cars/card";
import { Car } from "../lib/types/types";

const car: Car = {
    name: "Schrottreife Konservenbüxe",
    type: "Nissan Pixo",
    price: 100,
    color: "grey",
    isDamaged: true,
    motor: {
        power: 100,
        fuel: "Diesel",
    }
}

export default function CarsPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">      
        <h1>Cars</h1>
        <Card car={car}/>
    </div>
  );
}