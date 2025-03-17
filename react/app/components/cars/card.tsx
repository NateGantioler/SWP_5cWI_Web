"use client"
import React, { useState } from 'react'
import { Car } from '../../lib/types/types';
import Image from 'next/image';

type Props = {
  car: Car;
}

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);
    return (
    <div 
        className={`p-4 cursor-pointer ${isActive ? `bg-amber-800` : 'bg-gray-700'}`}
        onClick={() => setIsActive(!isActive)}
    >
        <h2 className="text-2xl font-bold">{car.name}</h2>
        <p className="text-sm">{car.type}</p>
        <p className="text-sm">{car.price}</p>
        <p className="text-sm">{car.color}</p>
        {car.imageUrl && (
          <div className="relative w-full h-48 mt-4">
            <Image
              src={car.imageUrl}
              alt={car.name}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}
        {isActive ? "active" : "inactive"}
    </div>
  )
}