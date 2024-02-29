import axios from "npm:axios";
import { Character,CharacterResponse } from "../types.tsx";
import CharacterData  from "../components/CharaterData.tsx"

async function Response (){
    const response = await axios.get<CharacterResponse>("https://rickandmortyapi.com/api/character");
    return response.data.results;
}

export default async function Home() {
  try{
    const data = await Response();
    return (
      <div>
        <h1>Rick and Morty Characters</h1>
        {data.map((character:Character) =>
        (
    <CharacterData name={character.name} image={character.image} status={character.status}       />
        ))}
      </div>
    );
  }catch(err){
    return <div>{err.message}</div>
  }
}
