import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import  Axios  from "npm:axios";
import { Joke } from "../../types.ts";
import JokesList from "../../components/JokesList.tsx"

type Data={
  Jokes: Array<Joke>
}

export const handler: Handlers<Data>={
  async GET(_req:Request,ctx:FreshContext<Data,unknown>){
    try{
      const key = Deno.env.get("API_KEY");
      const url ="https://api.api-ninjas.com/v1/Joke?limit=10";//Algo falla de la url
      const response= await Axios.get<Data>(url,{
          headers: {
            'X-Api-Key': key,
        }})
      if (response.status !== 200) {
          console.error(
            "Error fetching Joke",
            response.status,
            response.statusText,
          );
          throw new Error("Error fetching Joke");
      }
      return ctx.render({response});
    }catch(error){
      console.log(error);

    }
  }
}

export default function Home(props:PageProps<Data>) {

  return (
    <JokesList
      joke={props.data.response}
    />
  );
  }
