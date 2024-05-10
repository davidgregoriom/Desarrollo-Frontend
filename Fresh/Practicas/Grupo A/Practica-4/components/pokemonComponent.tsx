import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { Pokemon } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

const Pokemonss: FunctionComponent<{ Pokemons:[Pokemon] }> = ({ Pokemons }) => {
    //console.log(Object.keys(Pokemons))
    if(!Pokemons||!Pokemons.length){
        return <div class="details">No se ha encontrado Pokemons</div>
    }else{
        return(
            Pokemons.map((e:Pokemon)=>(
                <li class="details">
                    <div>{e.id}</div>
                    <div>{e.name}</div>
                    <div>{e.type}</div>
                    <div>{e.base_experience}</div>
                </li>
            ))
        )
    }


};

export default Pokemonss;
