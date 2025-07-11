import Card from '@/components/ui/card/Card'
import Link from 'next/link'
import React from 'react'


function PokemonCard({key,name,img,alt}:any) {
  return (
    <Card key={key} className="h-60">
        <div className=' w-full h-1/2 pt-1 '>
          <img src={img} alt={alt} className='min-w-[180px] h-full object-cover' />
        </div>
   
         <div className='bg-gray-200 h-full w-full flex flex-col items-center justify-between py-2 '>
           <h1 className='text-gray-700'>{name}</h1>
           <Link href={`/pokemon/${name}`} className='underline text-blue-700'>Details &rarr;</Link>
         </div>
    </Card>
  )
}

export default PokemonCard