import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Pokemon } from "../types.ts";
import  Pokemons from "../components/pokemonComponent.tsx"

export default function Page(): FunctionComponent {
  const [Pokemon, setPokemon] = useState<String>("");
  const [PagePokemon,setPagePokemon]=useState<Number>(1);
  const [ListPokemon,setListPokemon]=useState<[Pokemon]>([]);

  useEffect(() => {
    fetchCharacter(PagePokemon,Pokemon);
  }, [PagePokemon,Pokemon]);

  // fetch character with id from Rick and Morty API
  const fetchCharacter = async (page:number,pokemon:string) => {
    const response = await fetch(
      `https://fernandomur-random-data-72.deno.dev/pokemon?query=${pokemon}&page=${page}`,
    );
    const data = await response.json();
    console.log(data)
    setListPokemon(data);
  };
  return (
    <div class="components">
      <input class="lookforward"
      value={Pokemon}
      onInput={(e) => setPokemon(e.currentTarget.value)} placeholder="Buscar">
      </input>
      <Pokemons class="details" pokemons={ListPokemon}/>
      <div class="button">
        <button onClick={(e) => PagePokemon.value = PagePokemon.value - 1}>Anterior</button>
        <button onClick={(e) => PagePokemon.value = PagePokemon.value + 1}>Siguiente</button>
      </div>
    </div>
  );
}
