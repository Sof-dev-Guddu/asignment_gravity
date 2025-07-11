"use client"
import PokemonCardWithDetails from '@/components/shared/pokemon-card-with-details/PokemonCardWithDetails'
import { fetchPokemonByName } from '@/lib/http/pokemonApi'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function PokemonWithDetails() {
    const [data,setData] = useState<any>(null)
    const param=usePathname()
    const router=useRouter()
    const pokemonName=param.split("/")[2]
    const breadcrumb = param.split("/").join(">")
    
    async function fetchPokemonDetails(pokemonName:string){
        // console.log(pokemonName)
      const datas = await fetchPokemonByName(pokemonName)
      console.log(datas)
      setData(datas)
     
    }

    useEffect(()=>{
      fetchPokemonDetails(pokemonName)
     
    },[param])

    function goBack (){
     router.back()
    }


  return (
    <section className='py-6 px-10'>
      <button onClick={goBack} className='text-green-600'>&larr; back</button>
      <h2 className='mt-4'>home{breadcrumb}</h2>
       <div className='flex justify-center'>
           {
        data && <PokemonCardWithDetails
          key={data.name} 
          img={data.img}
          alt={data.name}
          name={data.name}
          type={data.types}
          stats={data.stats}
          ability={data.ability}
          moves={data.moves}
        />
       }
       </div>
    </section>
  )
}

export default PokemonWithDetails