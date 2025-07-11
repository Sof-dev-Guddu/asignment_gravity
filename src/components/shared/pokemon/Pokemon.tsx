"use client"
import React from 'react'
import PokemonFilters from '../pokemon-filters/PokemonFilters'
import PokemonLists from '../pokemon-lists/PokemonLists'
import usePokemonFilters from '@/hooks/filter-pokemon/usePokemonFilters'

function Pokemon({data,types}:any) {
     const {filterData,handleSelect,query,handleChange}=usePokemonFilters(data)
  return (
    <>
     <section>
    <PokemonFilters types={types} handleSelect={handleSelect} handleChange={handleChange} query={query} />
    </section>
    <section>
    <PokemonLists data={filterData}/>
    </section>
    </>
  )
}

export default Pokemon