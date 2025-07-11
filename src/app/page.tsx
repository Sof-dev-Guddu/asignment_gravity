
import PokemonFilters from "@/components/shared/pokemon-filters/PokemonFilters";
import PokemonLists from "@/components/shared/pokemon-lists/PokemonLists";
import { fetchByType, fetchPokemon } from "@/lib/http/pokemonApi";
import PokemonListsPage from "./pokemon/page";
import Pokemon from "@/components/shared/pokemon/Pokemon";



export default async function Home() {
   const types = await fetchByType()
    console.log (types)
   const {data , error}:any= await fetchPokemon(30)
  //  console.log(data)
  if(error){
    return(
      <>ERROR : {error.message}</>
    )
  }
  return (
   <main>
    <Pokemon data={data} types={types}/>
   </main>
  );
}
