export interface Motor {
    power: number;
    fuel: string;
}

export interface Car {
    name: string;
    type: string;
    price: number;
    color: string;
    isDamaged: boolean;
    motor: Motor;
    imageUrl: string;
}