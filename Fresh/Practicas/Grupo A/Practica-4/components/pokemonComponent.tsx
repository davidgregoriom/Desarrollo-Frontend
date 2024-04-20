import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { Pokemon } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

const Pokemonss: FunctionComponent<{ Pokemons: Signal<Pokemon[]> }> = ({ Pokemons }) => {
    if (IS_BROWSER){
        return(
                Pokemons.map((e:Pokemon)=>(
                    <li>
                        <div>{e.id}</div>
                        <div>{e.name}</div>
                        <div>{e.type}</div>
                        <div>{e.base_experience}</div>
                    </li>
                ))
        )
    }else return <div>No se ha encontrado Pokemons</div>


};

export default Pokemonss;
