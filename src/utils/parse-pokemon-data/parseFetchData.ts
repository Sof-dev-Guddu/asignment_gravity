interface Ability {
  ability: {
    name: string;
  };
}

interface Move {
  move: {
    name: string;
  };
}

interface Sprite {
  front_default: string;
}

interface Stat {
  stat: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}

interface ParsedPokemonData {
  name: string;
  types: string;
  stats: string;
  ability: string;
  moves: string;
  img: string;
}

interface FetchPokemonData {
  name: string;
  abilities: Ability[];
  moves: Move[];
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
}

function parseFetchData(data: FetchPokemonData): ParsedPokemonData {
    const ability = data.abilities.map((item)=>{
        return item.ability.name
    }).join(", ") 
    
    const name = data.name
    
    const moves = data.moves.map((item)=>{
        return item.move.name
    }).splice(1,6).join(", ")
    
    const img = data.sprites.front_default
    
    const  stats = data.stats.map((item)=>{
    return item.stat.name
    }).join(", ")

    const types = data.types.map((item)=>{
        return item.type.name
    }).join(", ") 
 
return  {
    name,
    types,
    stats,
    ability,
    moves,
    img
  }

}

export default parseFetchData