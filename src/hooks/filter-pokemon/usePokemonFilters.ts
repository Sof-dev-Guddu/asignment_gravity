"use client"
import { fetchBySelectedType } from "@/lib/http/pokemonApi";
import { useEffect, useState } from "react";



export default function usePokemonFilters (data:any) {
        // console.log("first at usePokemon handle select" , data)
      
       const [query , setQuery] = useState<string>("")
          const [mainData , setMainData] = useState<any>(data)
          const [filterData,setFilterData] = useState<any> (data)
         
       useEffect(() => {
       setMainData(data);
       setFilterData(data);
       }, [data]);
          
      
          
        function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);
        
        if (!value.trim()) {
          setFilterData(mainData);
          return;
        }
      
        const isFilterData = mainData.filter((item: any) =>
          item.name.toLowerCase().startsWith(value.trim().toLowerCase())
        );
        setFilterData(isFilterData);
      }
       
      
      
      async function handleSelect (e:React.ChangeEvent<HTMLSelectElement>){
          console.log(e.target.value)
          const selectedData = await fetchBySelectedType(e.target.value)
         setMainData(selectedData);
        setFilterData(selectedData)
        }
 return {
    query,
    filterData,
    handleChange,
    handleSelect,
   
  };

}