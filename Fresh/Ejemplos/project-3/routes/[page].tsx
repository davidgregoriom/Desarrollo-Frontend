import Axios from "npm:axios";
import Character from "../components/Character.tsx";
import { CharacterResponse} from "../types.ts"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Data = CharacterResponse & {page:string};

export const handler: Handlers<Data> ={
  async GET(_req:Request,ctx:FreshContext<unknown,Data>){
    try{
        const {page}= ctx.params;
        const response = await Axios.get<CharacterResponse>(
          `https://rickandmortyapi.com/api/character?page=${page}`,
        )
        if (response.status !== 200) {
            console.error(
              "Error fetching characters",
              response.status,
              response.statusText,
            );
            throw new Error("Error fetching characters");
        }
        return ctx.render({...response.data,page});

    }catch(err){
        console.error(
            err
        );
    }
  }
};

export default function Page(props:PageProps<Data>) {

  const {info,results,page}=props.data;
  return (
    <div class="flex-container">
        <h1> Rick & Morty </h1>
        <h2> Página {page} </h2>

        <ul>
        {results.map((character)=>(
          <li key={character.id}>
            <Character name={character.name} image={character.image} status={character.status}></Character>
            <a href={`/character/${character.id}`}>{character.name}</a>//Llamar al componente Character
          </li>
        ))}
        </ul>

        {parseInt(page)>1 && (<a href={`/${parseInt(page)-1}`}>Anterior</a>)}
        {parseInt(page)<info.pages && (<a href={`/${parseInt(page)+1}`}>Siguiente</a>)}
    </div>
  );
}
