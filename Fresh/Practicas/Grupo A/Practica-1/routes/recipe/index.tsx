import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { RecipeBefore } from "../../types.ts";
import  Axios  from "npm:axios";
import RecipePostComponent from "../../components/RecipePostComponent.tsx"
import RecipeGetComponent from "../../components/RecipeGetComponent.tsx";
import RecipeIsland from "../../islands/recipe.tsx";
import convert from "../../script/convert.ts";


type Data={
  Recipe: Array<RecipeBefore>
}


export const handler: Handlers={
  async POST(req:Request,ctx:FreshContext<Data>){
    try{
      const form= await req.formData();
      const name ={
        name: form.get("name")
      }
      const key = Deno.env.get("API_key");
      const url =`https://api.api-ninjas.com/v1/recipe?query=${name}`;//Algo falla de la url
      const response= await Axios.get<Data>(url,{
          headers: {
            'X-Api-Key': key,
        }})
      if (response.status !== 200) {
          console.error(
            "Error fetching recipe",
            response.status,
            response.statusText,
          );
          throw new Error("Error fetching recipe");
      }
      //console.log(response.data);
      return ctx.render(response.data);
    }catch(error){
      console.log(error)
    }
  }
}
export default function Home(props:PageProps<Data>) {
  const data = convert(props.data);
  //console.log(data);
  return (
    <RecipeIsland prop={data} />
  );
}



/*
export default function Home(props:PageProps<Data>) {

    return (
      <div>
        <RecipePostComponent />
        {props.data > 0 && (
          <RecipeGetComponent recipe={data} />
        )}
      </div>
    );
  }
*/
