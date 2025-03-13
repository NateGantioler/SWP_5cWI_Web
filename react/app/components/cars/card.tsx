import React from 'react'
import { Car } from '../../lib/types/types';

type Props = {
  car: Car;
}

export default function Card({ car }: Props) {
  return (
    <div className=" bg-amber-800 p-4">card: {car.name}</div>
  )
}