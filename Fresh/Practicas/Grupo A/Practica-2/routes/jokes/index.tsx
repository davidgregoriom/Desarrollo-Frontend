import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import  Axios  from "npm:axios";
import { Joke } from "../../types.ts";
import Jokes from "../../islands/jokes.tsx";
import JokesList from "../../components/JokesComponent.tsx";

type Data={
  Jokes: Array<Joke>
}

export const handler: Handlers<Data>={
  async GET(_req:Request,ctx:FreshContext<Data>){
    try{
      const key = Deno.env.get("API_key");
      const url ="https://api.api-ninjas.com/v1/jokes?limit=10";
      const response= await Axios.get<unknown, Data>(url,{
          headers: {
            'X-Api-Key': key,
        }})
      console.log(response.data);
      return ctx.render(response.data);
    }catch(error){
      console.log(error);

    }
  }
}

export default function Home(props:PageProps<Data>) {
  console.log(props.data);
  return <JokesList jokes={props.data} />;
}

/*
export default function Home(props:PageProps<Data>) {

  return <Jokes jokes={props.data} />;
}
*/
