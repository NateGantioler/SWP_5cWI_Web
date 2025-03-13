import React from 'react'
import { Car } from '../../lib/types/types';
import Card from './card';

type Props = {
    cars: Car[];
}

export default function carList({cars}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">      
        <h1 className="col-span-full text-center text-3xl">Cars</h1>
        {cars.map((car) => (
            <Card key={car.name} car={car}/>
        ))}
    </div>
  )
}