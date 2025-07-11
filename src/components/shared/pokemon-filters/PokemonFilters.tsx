"use client"
import usePokemonFilters from '@/hooks/filter-pokemon/usePokemonFilters'
import React from 'react'

function PokemonFilters({types, handleSelect, handleChange, query}:any) {
  
  return (
     <section className='w-full px-6 py-10'>
    <div>
    <select onChange={handleSelect}  className='w-[250px] bg-white text-gray-600 outline-none rounded py-1 space-y-1 text-xl '  defaultValue="">
    <option value="" disabled>Select</option>
    {types && types.map((item:any) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
    </div>

    <div className='mt-4'>
        <label htmlFor='search' className='sr-only'>Search By Name</label>
        <input id="search" type='text' value={query} onChange={handleChange} placeholder='Serach Pokemon By Name ...'  className='w-[250px] bg-white text-gray-600 outline-none rounded py-1 px-4 space-y-1 text-l'/>
    </div>

   </section>
  )
}

export default PokemonFilters