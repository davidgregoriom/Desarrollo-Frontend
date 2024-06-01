import Axios from "npm:axios";
import CharacterDescription from "../../components/CharacterDescription.tsx";
import { CharacterResponse,Character} from "../../types.ts"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<Character> ={
  async GET(_req:Request,ctx:FreshContext<unknown,Character>){
    try{
      const {id}= ctx.params;
      const response = await Axios.get<Character>(
        `https://rickandmortyapi.com/api/character/${id}`,
      )
      if (response.status !== 200) {
          console.error(
            "Error fetching characters",
            response.status,
            response.statusText,
          );
          throw new Error("Error fetching characters");
      }
      return ctx.render({id,response});
    }catch(err){
        console.error(
            err
        );
    }
  }
};

export default function Page(props:PageProps<Character>) {

    const {id,character}=props.data;
    return (
    <div>
        <a href="/">Back</a>
        <CharacterDescription result={character}></CharacterDescription>
    </div>
  );
}


