import { Character, Data } from "../types.ts";
import Axios from "npm:axios";

async function Characters(): Promise<Data> {
  try {
    const characters = await Axios.get<Data>(
      "https://rickandmortyapi.com/api/character",
    );
    return characters.data;
  } catch (err) {
    console.log(err);
    return <div>Ha habido un error: {err}</div>;
  }
}

export default async function Home() {
  const characters:Data = await Characters();
  return (
    <div>
      <h1>Personas de Rick and Morty:</h1>
      <ul>
        {characters.results.map((character: Character) => {
          return <li key={character.id}>{character.name}</li>;
        })}
      </ul>
    </div>
  );
}
