import { Data, Characters } from "../types.ts";
import { characters } from "../components/functions.tsx";

"use client";
export default async function Home() {
  try {
    const charactersData: Data = await characters();
    return (
      <div>
        <h1>Personas de Rick and Morty:</h1>
        <ul>
          {charactersData.results.map((character: Characters) => {
            return <li key={character.id}>
              {character.name},
              <a href={`./character/${character.id}.tsx`}>
                <img class="my-6" src={character.image} alt="Personajes"width="128" height="128"></img>
              </a>
              </li>;
        })}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error al obtener personajes:", error);
  }
}
