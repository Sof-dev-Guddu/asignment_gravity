import parseFetchData from "@/utils/parse-pokemon-data/parseFetchData"
import { error } from "console"

const BASE_URL="https://pokeapi.co/api/v2/"
const EndPoints={
general:"pokemon/",
types: "type/",
}
Object.freeze(EndPoints)

async function fetchByType () {
    try {
       const response = await fetch(BASE_URL+EndPoints.types)
        // console.log("check here",response)
    if(!response.ok){
        // console.log("check")
      throw new Error ("Bad Request")
    }
    const data = await response.json()
    return data.results.map((item:any)=>{
      return item.name
    }) 
    } catch (error) {
        return error
    }
    
}

async function fetchBySelectedType (type:string) {
    try {
       const response = await fetch(BASE_URL+EndPoints.types+type)
        // console.log("check here",response)
    if(!response.ok){
        // console.log("check")
      throw new Error ("Bad Request")
    }
    const data = await response.json()
    // console.log(data.pokemon.slice(1,50).map((item:any)=>(item.pokemon.name)))
       const eachPokemonDataPromises =  await data.pokemon.slice(1,50).map(  async (item:any)=>{
      const data = await fetchPokemonByName(item.pokemon.name) 
      
      return data
  })

   const eachPokemonData = await Promise.all(eachPokemonDataPromises)
//    console.log(eachPokemonData)
    return eachPokemonData
    } catch (error) {
        return error
    }
    
}

async function fetchPokemonByName (name:string){
  try {
    const response = await fetch(BASE_URL+EndPoints.general+name)
    if(!response.ok){
      throw new Error ("Bad Request")
    }
    const data = await response.json()
    return parseFetchData(data)
  } catch (error) {
    return error
  }
}


async function fetchPokemon (limit?:number){
    
  try {
    const response = await fetch(BASE_URL+EndPoints.general+"?limit="+limit)
    if(!response.ok){
      throw new Error ("Bad Request")
    }
    const data = await response.json()
    const eachPokemonDataPromises =  await data?.results.map(  async (item:any)=>{
      const data = await fetchPokemonByName(item.name) 
      
      return data
  })

   const eachPokemonData = await Promise.all(eachPokemonDataPromises)
  //  console.log(eachPokemonData)
    return {data:eachPokemonData,error:null}
  } catch (err:any) {
    return {data:null,error:err.message}
  }
}






export {fetchPokemon , fetchPokemonByName , fetchByType, fetchBySelectedType}