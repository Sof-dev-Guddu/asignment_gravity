"use client"

import Link from 'next/link';
import { useEffect } from 'react';
import PokemonCard from '../pokemon-cards/PokemonCard';



function PokemonLists({data}:any) {
    
    useEffect(() => {
  console.log("Incoming data to hook:", data);
}, [data]);


   if (!data || data.length === 0) {
    return <p className="text-center text-gray-600">No Pokémon found.</p>
    }
  return (
     <section className='flex flex-col md:flex-row md:flex-wrap justify-center items-center space-y-6 md:space-x-6 '>
     {data && data.map((item: { name: string; img: string }, index: number) => (
     <PokemonCard
      key={index}
      name={item.name}
      img={item.img}
      alt={item.name}
      />
))}
    </section>
   
  )
}

export default PokemonLists