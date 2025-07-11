import Card from '@/components/ui/card/Card'
import React from 'react'

function PokemonCardWithDetails({key,img,alt,name,type,stats,ability,moves}:any) {
  return (
    <Card key={key} className="w-[80dvw] md:w-[30dvw] md:h-[80dvh] justify-center ">
        <div className=' w-full h-1/2 pt-1 '>
          <img src={img} alt={alt} className='min-w-[70dvw] md:min-w-[30dvw]  h-full object-cover' />
        </div>
   
         <div className='bg-gray-200 h-full text-gray-700 w-full flex flex-col items-center justify-between py-2 px-6 space-y-4'>
           <h1 className='text-gray-700 font-bold text-xl'>{name}</h1>
           <p><span className='font-bold '> type : </span> {type}</p>
           <p><span className='font-bold '> stats : </span>{stats} </p>
           <p><span className='font-bold '>abilities : </span> {ability} </p>
           <p><span className='font-bold '>some moves :</span> {moves}</p>
         </div>
    </Card>
  )
}

export default PokemonCardWithDetails