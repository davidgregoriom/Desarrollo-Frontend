import Image from "next/image";
import Id from "@/components/id";
import { Planet, PlanetAPI } from "@/types";
import { useEffect, useState } from "react";


const id = async (context:PlanetAPI) =>{

    const [data,setData]= useState<PlanetAPI[]>([]);

    const { id } = context.query;

    const fetchData = async()=> {
       try{
        const res = await fetch(`https://swapi.dev/api/planets/${id}`);
        const Json= await res.json();
         setData(Json.results);
       }catch(e){
        console.log(e);
       }
    };
    

    useEffect(() => {
        fetchData();
    }, [id]);
  
    if (data.length === 0) {
        return <>Loading...</>;
    }

    return {
      props: {
        data
      },
    };
}


export default id;


