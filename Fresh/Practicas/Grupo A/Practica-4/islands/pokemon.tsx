import { Signal, useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Pokemon } from "../types.ts";
import  Pokemons from "../components/pokemonComponent.tsx"
import Button from "../components/Button.tsx";

export default function Page(number:number){
  const [Pokemon, setPokemon] = useState<string>("");
  //const [PagePokemon,setPagePokemon]=useState<Number>(1);
  const [ListPokemon,setListPokemon]=useState<Array<Pokemon>>([]);
  const PagePokemon = useSignal(number);
  const [ColorsPokemon,setColorsPokemon]=useState<[string]>([""]);

  useEffect(() => {
    fetchCharacter(PagePokemon,Pokemon);
  }, [PagePokemon,Pokemon]);

  const fetchCharacter = async (page:Signal<number>,pokemon:string) => {
    const response = await fetch(
      `https://fernandomur-random-data-72.deno.dev/pokemon?query=${pokemon}&page=${page}`,
    );
    const data = await response.json();
    const color = data.map((e:Pokemon)=>(e.id,e.type));
    debugger;
    setListPokemon(data);
    setColorsPokemon(color);
  };
  return (
    <div class="components">
      <input class="lookforward"
      value={Pokemon}
      onInput={(e) => setPokemon(e.currentTarget.value)} placeholder="Buscar">
      </input>
      <Pokemons class="details" pokemons={ListPokemon}/>
      <Button/>
      {
      /*<div class="button">
        <button onClick={(e) => PageQuotes.value = PageQuotes.value - 1}>Anterior</button>
        <button onClick={(e) => PageQuotes.value = PageQuotes.value + 1}>Siguiente</button>
      </div>
      */}

    </div>
  );
}
