import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { RecipeBefore } from "../../types.ts";
import  Axios  from "npm:axios";
import RecipeComponent from "../../components/RecipeComponent.tsx"

export const handler: Handlers={
  async POST(req:Request,ctx:FreshContext<RecipeBefore>){
    try{
      const form= await req.formData();
      const name ={
        name: form.get("name")
      }
      const key = Deno.env.get("API_KEY");
      const url =`https://api.api-ninjas.com/v1/recipe?query=${name}`;//Algo falla de la url
      const response= await Axios.get<RecipeBefore>(url,{
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
      return ctx.render(response);
    }catch(error){
      console.log(error)
    }
  }
}


export default function Home() {

    return (
      <RecipeComponent />
    );
  }
